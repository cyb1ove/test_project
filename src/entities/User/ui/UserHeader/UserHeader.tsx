import { clsx } from 'clsx';
import { selectUserAuthData } from 'entities/User/model/selectors/seleectUserAuthData/selectUserAuthData';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import { Text } from 'shared/ui/Text/Text';

import classes from './UserHeader.module.scss';

interface UserHeaderProps {
  className?: string;
}

export const UserHeader: FC<UserHeaderProps> = ({ className }) => {
  const user = useSelector(selectUserAuthData);
  const navigate = useNavigate();

  return (
    <div
      className={clsx(classes.UserHeader, className)}
      onClick={() => navigate(AppRoutes.PROFILE)}
    >
      <div className={classes.avatar_container}>
        <img src={user?.avatar} />
      </div>

      <div className={classes.user_data}>
        <Text title={user?.username} text={user?.email} />
      </div>
    </div>
  );
};
