import { clsx } from 'clsx';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import TranslateIcon from 'shared/assets/icons/translate.svg';
import { Button, ThemeButton } from 'shared/ui/Button';

import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={clsx(classes.LanguageSwitcher, className)}
      onClick={toggle}
    >
      <TranslateIcon />
    </Button>
  );
};
