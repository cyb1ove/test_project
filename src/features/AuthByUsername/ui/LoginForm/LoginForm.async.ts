import { lazy } from 'react';

const LoginFormAsync = lazy(() =>
  import('./LoginForm').then((module) => ({ default: module.LoginForm }))
);

export default LoginFormAsync;
