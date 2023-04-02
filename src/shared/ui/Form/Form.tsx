import { clsx } from 'clsx';
import { FC, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

import { Button, ButtonSize } from '../Button/Button';
import { Text, TextTheme } from '../Text/Text';
import classes from './Form.module.scss';

interface FormProps {
  className?: string;
  children: ReactElement<typeof Input>[];
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
  error,
  onSubmit,
  isValid,
  isLoading,
}) => {
  const { t } = useTranslation();

  return (
    <form className={clsx(classes.Form, className)} onSubmit={onSubmit}>
      <div>
        <h1>{t(title)}</h1>

        <Text theme={TextTheme.ERROR} text={error} className={classes.error} />
      </div>

      {children}

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
};
