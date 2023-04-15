import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import classes from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text: FC<TextProps> = ({
  className,
  text,
  title,
  theme = TextTheme.PRIMARY,
}) => {
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.Text, classes[theme], className)}>
      {title && <p className={classes.title}>{t(title)}</p>}
      {text && <p className={classes.text}>{t(text)}</p>}
    </div>
  );
};
