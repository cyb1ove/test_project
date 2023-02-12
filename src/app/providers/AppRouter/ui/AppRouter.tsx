import { ErrorContext } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { PageError } from 'pages/PageError';
import { Suspense, useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
  const { error } = useContext(ErrorContext);

  if (error) {
    return (
      <Suspense fallback={<PageLoader />}>
        <PageError />
      </Suspense>
    );
  }

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route key={path} element={element} path={path} />
        ))}
      </Routes>
    </Suspense>
  );
};
