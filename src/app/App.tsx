import './styles/index.scss';

import { useTheme } from 'shared/hooks/useTheme';
import { Navbar } from 'widgets/Navbar';

import { AppRouter } from './providers/AppRouter/ui/AppRouter';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>TOGGLE</button>
    </div>
  );
};

export default App;
