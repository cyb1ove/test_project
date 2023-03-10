import { lazy } from 'react';

const MainPageAsync = lazy(() =>
  import('./MainPage').then((module) => ({ default: module.MainPage }))
);

export default MainPageAsync;
