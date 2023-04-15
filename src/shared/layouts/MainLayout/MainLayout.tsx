import { ComponentType, FC, memo, useState } from 'react';
import { Outlet } from 'react-router-dom';
import {
  I18NamespaceContext,
  NamespaceType,
} from 'shared/contexts/i18NamespaceContext';

import classes from './MainLayout.module.scss';

interface MainLayoutProps {
  navbar?: ComponentType;
  sidebar?: ComponentType;
}

export const MainLayout: FC<MainLayoutProps> = memo(
  ({ navbar: Navbar, sidebar: Sidebar }) => {
    const [namespace, setNamespace] = useState<NamespaceType>(null);

    return (
      <I18NamespaceContext.Provider value={{ namespace, setNamespace }}>
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
      </I18NamespaceContext.Provider>
    );
  }
);
