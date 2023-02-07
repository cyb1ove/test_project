import './styles/index.scss';

import clsx from 'clsx';
import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';

import { AppRouter } from './providers/AppRouter/ui/AppRouter';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={clsx('app', theme)}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
