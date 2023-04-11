import { clsx } from 'clsx';
import {
  Attributes,
  ComponentPropsWithRef,
  ComponentType,
  createElement,
  CSSProperties,
  ReactElement,
  useState,
} from 'react';
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
  OUTLINE = 'outline',
  BACKGROUND = 'background',
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
    pending?: boolean;
    shaped?: ShapedTypes;
    image?: ReactElement;
    innerRef?: React.RefObject<HTMLElement>;
    hoverTheme?: ThemeButton;
  };

export function Button<C extends BaseButtonComponent = 'button'>({
  children,
  className,
  theme = ThemeButton.EMPTY,
  size = ButtonSize.SMALL,
  shaped,
  pending,
  image,
  hoverTheme,
  ...otherProps
}: ButtonProps<C>) {
  const [initialWidth, setInitialWidth] = useState(0);
  const [isHovering, hoverProps] = useHover();

  const actualTheme = isHovering ? hoverTheme || theme : theme;
  const mods = [classes[actualTheme], classes[size], classes[shaped]];

  const modsObj = {
    [classes.withImage]: !!image,
  };

  return (
    <BaseButton<C>
      innerRef={(node: HTMLElement) =>
        setInitialWidth(node ? node.offsetWidth : 0)
      }
      className={clsx(classes.Button, className, mods, modsObj)}
      style={pending ? { width: initialWidth } : {}}
      {...hoverProps}
      {...(otherProps as BaseButtonProps<C>)}
    >
      {pending ? (
        <ButtonLoader className={classes.loader} />
      ) : (
        <>
          {image && <div className={classes.image_container}>{image}</div>}
          {children}
        </>
      )}
    </BaseButton>
  );
}
