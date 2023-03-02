import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ButtonRoundedTypes,
  ButtonSize,
  ThemeButton,
} from 'shared/ui/Button/Button';

import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.BACKGROUND}
      className={clsx(classes.LanguageSwitcher, className)}
      onClick={toggle}
      rounded={ButtonRoundedTypes.PARTLY}
      size={ButtonSize.MEDIUM}
      squared
    >
      <span>{i18n.language}</span>
    </Button>
  );
};
