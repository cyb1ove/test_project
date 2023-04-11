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

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(
  ({ className }) => {
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
        size={ButtonSize.LARGE}
        shaped={ShapedTypes.SQUARE}
      >
        <span>{i18n.language}</span>
      </Button>
    );
  }
);
