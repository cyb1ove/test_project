import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useActive = (to: string) => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (location.pathname === to) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [location, to]);

  return active;
};
