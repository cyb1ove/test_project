import "./styles/index.scss";

import { Link } from "react-router-dom";
import { useTheme } from "shared/hooks/useTheme";

import { AppRouter } from "./providers/AppRouter/ui/AppRouter";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
