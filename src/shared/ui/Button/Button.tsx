import { clsx } from 'clsx';
import {
  Attributes,
  ComponentPropsWithRef,
  ComponentType,
  createElement,
  CSSProperties,
  ReactElement,
} from 'react';
import { useTranslation } from 'react-i18next';
import useHover from 'react-use-hover';

import { ButtonLoader } from '../ButtonLoader/ButtonLoader';
import classes from './Button.module.scss';

type BaseButtonComponent = keyof JSX.IntrinsicElements | ComponentType<any>;

type BaseProps<C extends BaseButtonComponent = 'button'> = {
  component?: C;
  className?: string;
  style?: CSSProperties;
  innerRef?: React.RefObject<HTMLElement>;
} & Attributes;

type BaseButtonProps<C extends BaseButtonComponent = 'button'> =
  C extends keyof JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ComponentType<infer P>
    ? P extends ComponentPropsWithRef<any>
      ? Omit<BaseProps<C>, keyof P> & P
      : never
    : never;

function BaseButton<C extends BaseButtonComponent = 'button'>({
  component = 'button',
  children,
  innerRef,
  ...props
}: BaseButtonProps<C>) {
  return createElement(component, { ...props, ref: innerRef }, children);
}

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  EMPTY = 'empty',
}

export enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

export enum ShapedTypes {
  SQUARE = 'square',
  CIRCLE = 'circle',
}

type ButtonProps<C extends BaseButtonComponent = 'button'> =
  BaseButtonProps<C> & {
    theme?: ThemeButton;
    size?: ButtonSize;
    align?: 'left' | 'center' | 'right';
    pending?: boolean;
    shaped?: ShapedTypes;
    leftElement?: ReactElement;
    rightElement?: ReactElement;
    icon?: ReactElement;
    text?: string;
    maxLengthText?: string;
    innerRef?: React.RefObject<HTMLElement>;
    hoverTheme?: ThemeButton;
    collapsed?: boolean;
  };

export function Button<C extends BaseButtonComponent = 'button'>({
  children,
  className,
  theme = ThemeButton.EMPTY,
  size = ButtonSize.SMALL,
  shaped,
  pending,
  leftElement,
  rightElement,
  text,
  align,
  maxLengthText,
  collapsed,
  hoverTheme,
  icon,
  ...otherProps
}: ButtonProps<C>) {
  const [isHovering, hoverProps] = useHover();
  const { t } = useTranslation();

  const actualTheme = isHovering ? hoverTheme || theme : theme;
  const plainMods = [
    classes[actualTheme],
    classes[size],
    classes[shaped],
    classes[`${align}_align`],
  ];

  const objectMods = {
    [classes.extraElements]: !!(leftElement || rightElement),
    [classes.collapsed]: collapsed,
    [classes.icon]: !!shaped,
  };

  const textMods = {
    [classes.right_align]: leftElement && !rightElement && !align,
    [classes.left_align]: rightElement && !leftElement && !align,
  };

  const renderContent = () => {
    if (icon) {
      return icon;
    }

    return (
      <>
        <div className={classes.left_container}>{leftElement}</div>

        <div
          data-text={maxLengthText || text || children}
          className={classes.text_container}
        >
          {pending ? (
            <ButtonLoader className={classes.loader} />
          ) : (
            <span className={clsx(classes.text, textMods)}>
              {t(text || children)}
            </span>
          )}
        </div>

        <div className={classes.right_container}>{rightElement}</div>
      </>
    );
  };

  return (
    <BaseButton<C>
      className={clsx(classes.Button, className, plainMods, objectMods)}
      {...hoverProps}
      {...(otherProps as BaseButtonProps<C>)}
    >
      {renderContent()}
    </BaseButton>
  );
}
