import { clsx } from 'clsx';
import { FC, ReactElement } from 'react';

import { Button, ButtonSize, ThemeButton } from '../Button/Button';
import { Text } from '../Text/Text';
import classes from './Form.module.scss';

interface FormProps {
  className?: string;
  children: ReactElement;
  title: string;
  error?: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
  isLoading: boolean;
}

const formButtonTheme = {
  general: ThemeButton.PRIMARY,
  size: ButtonSize.SMALL,
};

export const Form: FC<FormProps> = ({
  className,
  children,
  title,
  onSubmit,
  isValid,
  isLoading,
}) => (
  <form className={clsx(classes.Form, className)} onSubmit={onSubmit}>
    <Text title={title} />

    {children}

    <Button
      type="submit"
      className={classes.loginBtn}
      disabled={!isValid}
      theme={formButtonTheme}
      pending={isLoading}
    >
      Войти
    </Button>
  </form>
);
