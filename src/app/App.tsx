import './styles/index.scss';

import clsx from 'clsx';
import { LanguageSwitcher } from 'features/LanguageSwitcher';
import { Suspense } from 'react';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { AppRouter } from './providers/AppRouter/ui/AppRouter';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback="">
        <Navbar />

        <div className="content-page">
          <Sidebar />
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
