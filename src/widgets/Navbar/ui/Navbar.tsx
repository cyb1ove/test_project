import { clsx } from 'clsx';
import { FC } from 'react';

import classes from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return <div className={clsx(classes.Navbar, className)}></div>;
};
