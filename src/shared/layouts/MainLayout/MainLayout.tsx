import { ComponentType, FC, memo } from 'react';
import { Outlet } from 'react-router-dom';

import classes from './MainLayout.module.scss';

interface MainLayoutProps {
  navbar?: ComponentType;
  sidebar?: ComponentType;
}

export const MainLayout: FC<MainLayoutProps> = memo(
  ({ navbar: Navbar, sidebar: Sidebar }) => {
    return (
      <>
        <div className={classes.sidebarWrapper}>
          <Sidebar />
        </div>

        <div className={classes.contentPage}>
          <div className={classes.navbarWrapper}>
            <div className={classes.container}>
              <Navbar />
            </div>
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
