import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { PageError } from 'pages/PageError';
import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'shared/ui/PageLoader/Loader';

export const AppRouter = () => {
  const { error } = useContext(ErrorContext);

  if (error) {
    return (
      <Suspense fallback={<Loader />}>
        <PageError />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
