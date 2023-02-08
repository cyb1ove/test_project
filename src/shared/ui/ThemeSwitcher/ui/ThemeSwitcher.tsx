import { clsx } from 'clsx';
import { FC } from 'react';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { useTheme } from 'shared/hooks/useTheme';
import { Button, ThemeButton } from 'shared/ui/Button';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={clsx(classes.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      <ThemeIcon />
    </Button>
  );
};
