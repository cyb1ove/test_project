import { clsx } from 'clsx';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';

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
  const { namespace } = useContext(I18NamespaceContext);
  const { t } = useTranslation(namespace);
  console.log(title, namespace);

  return (
    <div className={clsx(classes.Text, classes[theme], className)}>
      {title && <p className={classes.title}>{t(title)}</p>}
      {text && <p className={classes.text}>{t(text)}</p>}
    </div>
  );
};
