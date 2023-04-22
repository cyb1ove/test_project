import { Theme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import Switch from 'react-switch';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';
import { useTheme } from 'shared/lib/hooks/useTheme';
import useToggle from 'shared/lib/hooks/useToggle';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  collapsed?: boolean;
}

const themeSwithcerTheme = {
  general: ThemeButton.SECONDARY,
  size: ButtonSize.MEDIUM,
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  className,
  collapsed = false,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useToggle(theme === Theme.DARK);

  const handleChange = () => {
    toggleTheme();
    setChecked();
  };

  return (
    <Button
      theme={themeSwithcerTheme}
      className={className}
      collapsed={collapsed}
      onClickCapture={handleChange}
    >
      <Button.Extra component={theme === Theme.DARK ? MoonIcon : SunIcon} />

      <Button.Text
        text={theme === Theme.DARK ? 'Тёмная' : 'Светлая'}
        maxLengthText="Светлая"
      />

      <Button.Extra
        component={Switch}
        className={classes.ThemeSwitcher}
        onChange={() => {}}
        checked={checked}
        offColor="#ddd"
        onColor="#fff"
        onHandleColor="#000"
        handleDiameter={10}
        uncheckedIcon={false}
        height={20}
        width={38}
      />
    </Button>
  );
};
