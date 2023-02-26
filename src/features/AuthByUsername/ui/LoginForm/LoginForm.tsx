import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

import classes from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.LoginForm, className)}>
      <Input type="text" className={classes.input} />
      <Input type="password" className={classes.input} />
      <Button className={classes.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
