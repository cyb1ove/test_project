import { lazy } from 'react';

const AboutPageAsync = lazy(() =>
  import('./AboutPage').then((module) => ({ default: module.AboutPage }))
);

export default AboutPageAsync;
