import './styles/index.scss';

import clsx from 'clsx';
import { userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTheme } from 'shared/hooks/useTheme';
import { MainLayout } from 'shared/layouts/MainLayout/MainLayout';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = () => {
  const { theme } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={<MainLayout sidebar={Sidebar} navbar={Navbar} />}
          >
            {Object.values(routeConfig).map(({ path, element }) => (
              <Route
                key={path}
                element={<Suspense fallback={<Loader />}>{element}</Suspense>}
                path={path}
              />
            ))}
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
