import { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => ++prevState);
  };

  return (
    <button className={classes.btn} onClick={handleClick}>
      {count}
    </button>
  );
};

export default Counter;
