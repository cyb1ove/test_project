import { clsx } from 'clsx';
import { selectError } from 'features/AuthByUsername/model/selectors/selectError';
import { Formik } from 'formik';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { useDebouncedCallback } from 'use-debounce';
import * as yup from 'yup';

import { selectIsLoading } from '../../model/selectors/selectIsLoading';
import { selectPassword } from '../../model/selectors/selectPassword';
import { selectUsername } from '../../model/selectors/selectUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

const userSchema = yup.object().shape({
  username: yup.string().required('Имя пользователя обязателен'),
  password: yup.string().required('Пароль обязателен'),
});

const LoginForm: FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();

  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const serverError = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useDynamicModuleLoader({ loginForm: loginReducer });

  const updateValFromStore = useDebouncedCallback((key, value) => {
    dispatch(loginActions.updateField({ key, value }));
  }, 250);

  return (
    <Formik
      initialValues={{
        username,
        password,
      }}
      validationSchema={userSchema}
      onSubmit={(values) => {
        dispatch(loginByUsername(values));
      }}
    >
      {({ handleSubmit, handleChange, isValid, errors, values }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className={clsx(classes.LoginForm, className)}
          >
            <h1>{t('Форма авторизации')}</h1>

            <Input
              name="username"
              type="text"
              role="login"
              className={classes.login}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event);
                updateValFromStore('username', event.target.value);
              }}
              placeholder={t('Имя пользователя')}
              value={values.username}
              error={serverError || errors.username}
            />

            <Input
              name="password"
              type="password"
              role="password"
              className={classes.password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event);
                updateValFromStore('password', event.target.value);
              }}
              placeholder={t('Пароль')}
              value={values.password}
              error={serverError || errors.password}
            />

            <Button
              type="submit"
              className={classes.loginBtn}
              disabled={!isValid}
              size={ButtonSize.MEDIUM}
              pending={isLoading}
            >
              {t('Войти')}
            </Button>
          </form>
        );
      }}
    </Formik>
  );
});

export default LoginForm;
