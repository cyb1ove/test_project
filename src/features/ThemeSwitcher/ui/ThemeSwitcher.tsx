import { Theme } from 'app/providers/ThemeProvider';
import { clsx } from 'clsx';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Switch from 'react-switch';
import MoonIcon from 'shared/assets/icons/moon.svg';
import SunIcon from 'shared/assets/icons/sun.svg';
import { useTheme } from 'shared/hooks/useTheme';

import classes from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
  collapsed: boolean;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({
  className,
  collapsed,
}) => {
  const { theme, toggleTheme } = useTheme();
  const [checked, setChecked] = useState(theme === Theme.DARK);
  const { t } = useTranslation();

  const mods = [{ [classes.collapsed]: collapsed }];

  const handleChange = (checked: boolean) => {
    toggleTheme();
    setChecked(checked);
  };

  return (
    <div className={clsx(classes.ThemeSwitcher, className, mods)}>
      <div className={classes.theme}>
        <div className={classes.moon_sun}>
          {theme === Theme.DARK ? <MoonIcon /> : <SunIcon />}
        </div>

        <span className={classes.mode_text}>
          {theme === Theme.DARK ? t('Тёмная') : t('Светлая')}
        </span>
      </div>

      <div className={classes.toggle_switch}>
        <Switch
          onChange={handleChange}
          checked={checked}
          offColor="#ddd"
          onColor="#fff"
          onHandleColor="#000"
          handleDiameter={10}
          uncheckedIcon={false}
          height={20}
          width={38}
        />
      </div>
    </div>
  );
};
