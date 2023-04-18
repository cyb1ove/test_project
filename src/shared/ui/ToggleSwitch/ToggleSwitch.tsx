import clsx from 'clsx';
import React, { FC } from 'react';

import classes from './ToggleSwitch.module.scss';

interface Props {
  id: string;
  checked: boolean;
  onChange: (status: boolean) => void;
  name?: string;
  small?: boolean;
  disabled?: boolean;
  className?: string;
}

export const ToggleSwitch: FC<Props> = ({
  id,
  name,
  checked,
  onChange,
  small,
  disabled,
  className,
}) => {
  function handleKeyPress(event: React.KeyboardEvent<HTMLLabelElement>) {
    if (event.keyCode !== 32) return;

    event.preventDefault();
    onChange(!checked);
  }

  return (
    <div
      className={clsx(classes.ToggleSwitch, { [classes.small_switch]: small })}
    >
      <input
        type="checkbox"
        name={name}
        className={classes.checkbox}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />

      {id ? (
        <label
          className={classes.label}
          htmlFor={id}
          tabIndex={disabled ? -1 : 1}
          onKeyDown={(e) => {
            handleKeyPress(e);
          }}
        >
          <span
            className={clsx(classes.inner, { [classes.disabled]: disabled })}
            data-yes={'Yes'}
            data-no={'No'}
            tabIndex={-1}
          />
          <span
            className={clsx(classes.switch, { [classes.disabled]: disabled })}
            tabIndex={-1}
          />
        </label>
      ) : null}
    </div>
  );
};
