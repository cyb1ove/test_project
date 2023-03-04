import { clsx } from 'clsx';
import { FC, InputHTMLAttributes, memo, ReactElement } from 'react';

import { Text, TextTheme } from '../Text/Text';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value'> & {
  icon?: ReactElement;
  error: string;
};

interface InputProps extends HTMLInputProps {
  className?: string;
  icon?: ReactElement;
  value?: string;
}

export const Input: FC<InputProps> = memo(
  ({ className, value, type = 'text', icon, error, ...otherProps }) => {
    const mods = [{ [classes.error]: error }];

    return (
      <div className={clsx(classes.Input, className, mods)}>
        <div className={classes.icon}>{icon}</div>
        <input type={type} value={value} {...otherProps} />
        <Text
          theme={TextTheme.ERROR}
          text={error}
          className={classes.error_text}
        />
      </div>
    );
  }
);
