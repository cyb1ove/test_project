import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import classes from './ContextMenu.module.scss';

type MenuItems = Record<string, () => void>;

interface ContextMenuProps {
  className?: string;
  header?: JSX.Element;
  menuItems: MenuItems;
  innerRef?: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

export const ContextMenu: FC<ContextMenuProps> = ({
  className,
  header,
  menuItems,
  innerRef,
  ...props
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <article
      className={clsx(classes.ContextMenu, className)}
      ref={innerRef}
      {...props}
    >
      {header && <header className={classes.header}>{header}</header>}

      <ul className={classes.items}>
        {Object.entries(menuItems).map(
          ([title, action]: [string, () => void]) => (
            <li className={classes.item} onClick={() => dispatch(action())}>
              {t(title)}
            </li>
          )
        )}
      </ul>
    </article>
  );
};
