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

      i18n.changeLanguage(i18n.language === 'RU' ? 'EN' : 'RU');
    };

    return (
      <Button
        theme={ThemeButton.PRIMARY}
        className={clsx(classes.LanguageSwitcher, className)}
        onClick={toggle}
        size={ButtonSize.MEDIUM}
        shaped={ShapedTypes.SQUARE}
        text={i18n.language}
      />
    );
  }
);
