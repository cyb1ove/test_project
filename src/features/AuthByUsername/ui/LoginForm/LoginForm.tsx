import { clsx } from 'clsx';
import { selectLoginError } from 'features/AuthByUsername/model/selectors/selectLoginError/selectLoginError';
import { Formik } from 'formik';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useDynamicModuleLoader } from 'shared/hooks/useDynamicModuleLoader';
import { Button, ButtonSize } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useDebouncedCallback } from 'use-debounce';
import * as yup from 'yup';

import { selectLoginPassword } from '../../model/selectors/selecLoginPassword.ts/selectLoginPassword';
import { selectLoginIsLoading } from '../../model/selectors/selectLoginIsLoading/selectLoginIsLoading';
import { selectLoginUsername } from '../../model/selectors/selectLoginUsername/selectLoginUsername';
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

  const username = useSelector(selectLoginUsername);
  const password = useSelector(selectLoginPassword);
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
            <div>
              <h1>{t('Форма авторизации')}</h1>

              <Text
                theme={TextTheme.ERROR}
                text={serverError}
                className={classes.error}
              />
            </div>

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
              error={errors.username}
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
              error={errors.password}
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
