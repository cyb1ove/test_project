import { LoginForm } from 'features/AuthByUsername';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC } from 'react';

import classes from './SignupPage.module.scss';

export const SignupPage: FC = () => {
  return (
    <div className={classes.SignupPage}>
      <LoginForm />

      <div className={classes.additional}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  );
};
