import { clsx } from 'clsx';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ShevronIcon from 'shared/assets/icons/shevron.svg';
import {
  Button,
  ButtonRoundedTypes,
  ButtonSize,
  ThemeButton,
} from 'shared/ui/Button/Button';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';

import { SidebarItem } from '../SidebarItem/SidebarItem';
import classes from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={clsx(classes.Sidebar, className, {
        [classes.collapsed]: collapsed,
      })}
    >
      <ul className={classes.items}>
        {SidebarItemsList.map(({ path, text, icon }) => (
          <SidebarItem
            to={path}
            text={text}
            icon={icon}
            collapsed={collapsed}
          />
        ))}
      </ul>

      <Button
        data-testid="collapse-button"
        className={classes.collapsedBtn}
        theme={ThemeButton.BACKGROUND}
        rounded={ButtonRoundedTypes.FULL}
        size={ButtonSize.SMALL}
        squared
        onClick={onToggle}
      >
        <ShevronIcon />
      </Button>

      <div className={clsx(classes.switchers)}>
        <Button className={clsx(classes.item)} theme={ThemeButton.OUTLINE}>
          {t('Выйти')}
        </Button>
      </div>
    </aside>
  );
};
