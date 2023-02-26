import { clsx } from 'clsx';
import {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  memo,
  ReactElement,
} from 'react';

import classes from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> & { icon?: ReactElement };

interface InputProps extends HTMLInputProps {
  className?: string;
  icon?: ReactElement;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo(
  ({ className, value, onChange, type = 'text', icon, ...otherProps }) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    };

    return (
      <div className={clsx(classes.Input, className)}>
        <div className={classes.icon}>{icon}</div>

        <input
          type={type}
          value={value}
          onChange={onChangeHandler}
          {...otherProps}
        />
      </div>
    );
  }
);
