import { clsx } from 'clsx';
import { LoginForm } from 'features/AuthByUsername';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC } from 'react';

import classes from './SignupPage.module.scss';

interface SignupPageProps {
  className?: string;
}

export const SignupPage: FC<SignupPageProps> = ({ className }) => {
  return (
    <div className={clsx(classes.SignupPage, className)}>
      <LoginForm />
      <ThemeSwitcher collapsed={false} />
    </div>
  );
};
