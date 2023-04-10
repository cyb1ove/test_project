import { LoginForm } from 'features/AuthByUsername';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC } from 'react';

import classes from './SignupPage.module.scss';

export const SignupPage: FC = () => {
  return (
    <div className={classes.SignupPage}>
      <LoginForm />
      <ThemeSwitcher />
    </div>
  );
};
