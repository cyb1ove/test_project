import { clsx } from 'clsx';
import { LoginForm } from 'features/AuthByUsername';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC } from 'react';

interface SignupPageProps {
  className?: string;
}

export const SignupPage: FC<SignupPageProps> = ({ className }) => {
  return (
    <div className={className}>
      <LoginForm />
      <ThemeSwitcher collapsed={false} />
    </div>
  );
};
