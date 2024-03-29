import clsx from 'clsx';
import { selectLoginError } from 'features/AuthByUsername/model/selectors/selectLoginError/selectLoginError';
import { Formik } from 'formik';
import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Form } from 'shared/ui/Form/Form';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDebouncedCallback } from 'use-debounce';

import { userSchema } from '../../config/schema';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import {
  loginByUsername,
  LoginByUsernameProps,
} from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

type Fields = {
  [key in keyof LoginByUsernameProps]: string;
};

const fields: Fields = {
  username: 'text',
  password: 'password',
};

export const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const serverError = useSelector(selectLoginError);
  const isLoading = useSelector(selectLoginIsLoading);

  const dispatch = useDispatch();

  useDynamicModuleLoader({ loginForm: loginReducer }, true);

  const updateValFromStore = useDebouncedCallback((key, value) => {
    dispatch(loginActions.updateField({ key, value }));
  }, 250);

  const initialValues: Fields = {
    username: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={(values) => {
        dispatch(loginByUsername(values));
      }}
    >
      {({ handleSubmit, handleChange, isValid, errors, values }) => (
        <Form
          className={clsx(classes.LoginForm, className)}
          title="Форма авторизации"
          error={serverError}
          onSubmit={handleSubmit}
          isValid={isValid}
          isLoading={isLoading}
        >
          <div className={classes.form_content}>
            <Text
              theme={TextTheme.ERROR}
              text={serverError}
              className={classes.error}
            />

            {(Object.entries(fields) as [keyof Fields, string][]).map(
              ([name, type]) => (
                <Input
                  name={name}
                  type={type}
                  className={classes[name]}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChange(event);
                    updateValFromStore(name, event.target.value);
                  }}
                  value={values[name]}
                  error={errors[name]}
                />
              )
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
});
