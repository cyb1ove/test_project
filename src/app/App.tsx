import './styles/index.scss';

import clsx from 'clsx';
import { userActions } from 'entities/User';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/AppRouter/ui/AppRouter';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback="">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="content-page">
          <div className="navbar-wrapper">
            <div className="container">
              <Navbar />
            </div>
          </div>

          <div className="page-wrapper">
            <div className="container">
              <AppRouter />
            </div>

            <div className="float-container">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};
