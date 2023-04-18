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
import { useHover } from 'shared/lib/hooks/useHover';

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
  innerRef?: React.RefObject<HTMLElement>;
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
  children:
    | ReactElement
    | [ReactElement, ReactElement]
    | [ReactElement, ReactElement, ReactElement]
    | string;
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

export function Icon({ svg: SVG, className, rounded }: IconProps) {
  // const mods = { [classes.circle]: rounded };

  return (
    <div className={clsx(classes.icon, className)}>
      <SVG />
    </div>
  );
}

export function Button<C extends BaseButtonComponent = 'button'>({
  theme: {
    general = ThemeButton.EMPTY,
    size = ButtonSize.SMALL,
    shaped,
    hoverTheme,
  },
  pending,
  collapsed,
  children,
  className,
  ...otherProps
}: ButtonProps<C>) {
  const [ref, isHovered] = useHover();

  const actualTheme = isHovered ? hoverTheme || general : general;
  const plainMods = [classes[actualTheme], classes[size], classes[shaped]];
  const objectMods = {
    [classes.collapsed]: collapsed,
  };

  return (
    <BaseButton<C>
      className={clsx(classes.Button, className, plainMods, objectMods)}
      innerRef={ref}
      {...(otherProps as BaseButtonProps<C>)}
    >
      {pending && <ButtonLoader className={classes.loader} />}

      {typeof children === 'string' ? <span>{children}</span> : children}
    </BaseButton>
  );
}

Button.Icon = Icon;
Button.Extra = Extra;
Button.Text = Text;

// export function Button<C extends BaseButtonComponent = 'button'>({
//   children,
//   className,
//   theme = ThemeButton.EMPTY,
//   size = ButtonSize.SMALL,
//   shaped,
//   pending,
//   leftElement,
//   rightElement,
//   text,
//   align,
//   maxLengthText,
//   collapsed,
//   hoverTheme,
//   icon,
//   ...otherProps
// }: ButtonProps<C>) {
//   const [initialWidth, setInitialWidth] = useState(0);
//   const [ref, isHovered] = useHover();
//   const { t } = useTranslation();

//   const actualTheme = isHovered ? hoverTheme || theme : theme;
//   const plainMods = [classes[actualTheme], classes[size], classes[shaped]];
//   const extraElementsExist = !!(leftElement || rightElement);

//   const objectMods = {
//     [classes.extraElements]: extraElementsExist,
//     [classes.collapsed]: collapsed,
//     [classes.icon]: !!shaped, // we can use more css setting icon class in Icon component
//   };

//   const textMods = [
//     classes[`${align}_align`],
//     {
//       [classes.right_align]: leftElement && !rightElement && !align,
//       [classes.left_align]: rightElement && !leftElement && !align,
//     },
//   ];

//   const renderContent = () => {
//     if (icon) {
//       return icon;
//     }

//     if (pending) {
//       return <ButtonLoader className={classes.loader} />;
//     }

//     let dataText;

//     if (maxLengthText) {
//       dataText = maxLengthText;
//     } else if (extraElementsExist) {
//       dataText = text || children; // we can set dataText static and use more css
//     }

//     return (
//       <>
//         <div className={classes.left_container}>{leftElement}</div>

//         <div data-text={dataText} className={classes.text_container}>
//           <span className={clsx(classes.text, textMods)}>
//             {t(text || children)}
//           </span>
//         </div>

//         <div className={classes.right_container}>{rightElement}</div>
//       </>
//     );
//   };

//   return (
//     <BaseButton<C>
//       className={clsx(classes.Button, className, plainMods, objectMods)}
//       innerRef={(node: HTMLElement) =>
//         setInitialWidth(node ? node.offsetWidth : 0)
//       }
//       style={pending ? { width: initialWidth } : {}}
//       {...(otherProps as BaseButtonProps<C>)}
//     >
//       {renderContent()}
//     </BaseButton>
//   );
// }
