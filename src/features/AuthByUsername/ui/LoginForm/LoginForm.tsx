import { selectLoginError } from 'features/AuthByUsername/model/selectors/selectLoginError/selectLoginError';
import { Formik } from 'formik';
import { FC, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader';
import { Form } from 'shared/ui/Form/Form';
import { Input } from 'shared/ui/Input/Input';
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

export const LoginForm: FC<LoginFormProps> = memo(() => {
  const serverError = useSelector(selectLoginError);
  const isLoading = useSelector(selectLoginIsLoading);

  const dispatch = useDispatch();

  useDynamicModuleLoader({ loginForm: loginReducer }, true);

  const updateValFromStore = useDebouncedCallback((key, value) => {
    dispatch(loginActions.updateField({ key, value }));
  }, 250);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        dispatch(loginByUsername(values));
      }}
    >
      {({ handleSubmit, handleChange, isValid, errors, values }) => {
        return (
          <Form
            className={classes.LoginForm}
            title="Форма авторизации"
            error={serverError}
            onSubmit={handleSubmit}
            isValid={isValid}
            isLoading={isLoading}
          >
            {Object.entries(fields).map(
              ([name, type]: [keyof LoginByUsernameProps, string]) => (
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
          </Form>
        );
      }}
    </Formik>
  );
});
