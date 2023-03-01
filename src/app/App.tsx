import './styles/index.scss';

import clsx from 'clsx';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Suspense, useEffect } from 'react';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/AppRouter/ui/AppRouter';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User/model';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [])

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback="">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="content-page">
          <Navbar />

          <div className="page-wrapper">
            <AppRouter />

            <div className="float-container">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default App;
