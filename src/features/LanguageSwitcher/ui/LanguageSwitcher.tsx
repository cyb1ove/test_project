import { clsx } from 'clsx';
import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Button,
  ButtonSize,
  ShapedTypes,
  ThemeButton,
} from 'shared/ui/Button/Button';

import classes from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string;
}

const languageSwitcherTheme = {
  general: ThemeButton.PRIMARY,
  size: ButtonSize.MEDIUM,
  shaped: ShapedTypes.SQUARE,
};

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
  ({ className }) => {
    const { i18n } = useTranslation();

    const toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();

      i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
      <Button
        theme={languageSwitcherTheme}
        className={clsx(classes.LanguageSwitcher, className)}
        onClick={toggle}
      >
        {i18n.language}
      </Button>
    );
  }
);
