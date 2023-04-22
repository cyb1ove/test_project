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

import { ButtonLoader } from '../ButtonLoader/ButtonLoader';
import classes from './Button.module.scss';

type BaseButtonComponent =
  | keyof JSX.IntrinsicElements
  | ComponentType<any>
  | React.VFC<React.SVGProps<SVGSVGElement>>;

type BaseProps<C extends BaseButtonComponent> = {
  component?: C;
  className?: string;
  style?: CSSProperties;
  innerRef?:
    | React.RefObject<HTMLElement>
    | React.Dispatch<React.SetStateAction<HTMLElement | null>>;
} & Attributes;

type BaseButtonProps<C extends BaseButtonComponent> =
  C extends keyof JSX.IntrinsicElements
    ? Omit<ComponentPropsWithRef<C>, keyof BaseProps<C>> & BaseProps<C>
    : C extends ComponentType<infer P>
    ? P extends ComponentPropsWithRef<any>
      ? Omit<BaseProps<C>, keyof P> & P
      : never
    : never;

function BaseButton<C extends BaseButtonComponent>({
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

type ButtonProps<C extends BaseButtonComponent> = BaseButtonProps<C> & {
  theme?: {
    general?: ThemeButton;
    size?: ButtonSize;
    hoverTheme?: ThemeButton;
    shaped?: ShapedTypes;
  };
  pending?: boolean;
  collapsed?: boolean;
  active?: boolean;
  children:
    | ReactElement
    | [ReactElement, ReactElement]
    | [ReactElement, ReactElement, ReactElement]
    | string;
  innerRef?:
    | React.RefObject<HTMLElement>
    | React.Dispatch<React.SetStateAction<HTMLElement | null>>;
};

type TextProps = {
  text: string;
  align?: 'left' | 'center' | 'right';
  maxLengthText?: string;
  offset?: number;
};

type IconProps = {
  svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  rounded?: boolean;
};

export function Extra<C extends BaseButtonComponent>({
  component,
  ...props
}: BaseButtonProps<C>) {
  return (
    <div className={classes.extra_container}>
      {createElement(component, props)}
    </div>
  );
}

export function Text({ text, align, maxLengthText, offset = 0 }: TextProps) {
  const { t } = useTranslation();

  let style;

  if (align) {
    if (align === 'center') {
      style = { left: 'unset', right: 'unset' };
    } else {
      style = { [align]: offset };
    }
  }

  return (
    <div data-text={maxLengthText || text} className={classes.text_container}>
      <span className={classes.text} style={style || {}}>
        {t(text)}
      </span>
    </div>
  );
}

export function Icon({ svg: SVG, className }: IconProps) {
  return (
    <div className={clsx(classes.icon, className)}>
      <SVG />
    </div>
  );
}

export function Button<C extends BaseButtonComponent = 'button'>({
  theme: { general = ThemeButton.EMPTY, size = ButtonSize.SMALL, shaped },
  pending,
  active,
  collapsed,
  children,
  className,
  innerRef,
  ...otherProps
}: ButtonProps<C>) {
  const { t } = useTranslation();

  const plainMods = [classes[general], classes[size], classes[shaped]];
  const objectMods = {
    [classes.collapsed]: collapsed,
    [classes.active]: active,
  };

  return (
    <BaseButton<C>
      className={clsx(classes.Button, className, plainMods, objectMods)}
      innerRef={innerRef}
      {...(otherProps as BaseButtonProps<C>)}
    >
      {pending && <ButtonLoader className={classes.loader} />}

      {typeof children === 'string' ? (
        <span className={classes.text}>{t(children)}</span>
      ) : (
        children
      )}
    </BaseButton>
  );
}

Button.Icon = Icon;
Button.Extra = Extra;
Button.Text = Text;
