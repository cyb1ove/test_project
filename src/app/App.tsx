import './styles/index.scss';

import clsx from 'clsx';
import { selectUserAuthData, userActions } from 'entities/User';
import { SignupPage } from 'pages/SignupPage/ui/SignupPage';
import { memo, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useTheme } from 'shared/hooks/useTheme';
import { MainLayout } from 'shared/layouts/MainLayout/MainLayout';
import { Loader } from 'shared/ui/Loader/Loader';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

export const App = memo(() => {
  const user = useSelector(selectUserAuthData);

  const { theme } = useTheme();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, []);

  const RequireAuth = user ? (
    <MainLayout sidebar={Sidebar} navbar={Navbar} />
  ) : (
    <Navigate to="/login" />
  );

  return (
    <div className={clsx('app', theme)}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/login" element={<SignupPage />} />

          <Route path="/" element={RequireAuth}>
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
});
