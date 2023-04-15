import { clsx } from 'clsx';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonSize, ThemeButton } from '../Button/Button';
import { Text } from '../Text/Text';
import classes from './Form.module.scss';

interface FormProps {
  className?: string;
  children: ReactElement;
  title: string;
  error: string;
  onSubmit: (e?: React.FormEvent<HTMLFormElement>) => void;
  isValid: boolean;
  isLoading: boolean;
}

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
      size={ButtonSize.SMALL}
      theme={ThemeButton.PRIMARY}
      pending={isLoading}
      text="Войти"
    />
  </form>
);
