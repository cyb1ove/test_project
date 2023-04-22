import { clsx } from 'clsx';
import { selectProfileData } from 'entities/Profile/modal/selectors/selectProfileData/selectProfileData';
import { selectProfileError } from 'entities/Profile/modal/selectors/selectProfileError/selectProfileError';
import { selectProfileIsLoading } from 'entities/Profile/modal/selectors/selectProfileIsLoading/selectProfileIsLoading';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';

import classes from './ProfileCard.module.scss';

interface ProfileCardProps {
  className?: string;
}

const profileButtonTheme = {
  general: ThemeButton.OUTLINE,
};

export const ProfileCard: FC<ProfileCardProps> = ({ className }) => {
  const data = useSelector(selectProfileData);
  const isLoading = useSelector(selectProfileIsLoading);
  const error = useSelector(selectProfileError);

  return (
    <div className={clsx(classes.ProfileCard, className)}>
      <Text title="Профиль" />

      <Button theme={profileButtonTheme}>Редактировать</Button>
    </div>
  );
};
