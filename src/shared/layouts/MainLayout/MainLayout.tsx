import { clsx } from 'clsx';
import { FC, memo, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
  navbar: ReactNode;
  sidebar: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = memo(
  ({ className, navbar, sidebar }) => {
    return (
      <>
        <div className={classes.sidebarWrapper}>{sidebar}</div>

        <div className={classes.contentPage}>
          <div className={classes.navbarWrapper}>
            <div className={classes.container}>{navbar}</div>
          </div>

          <div className={classes.pageWrapper}>
            <div className={classes.container}>
              <Outlet />
            </div>
          </div>
        </div>
      </>
    );
  }
);
