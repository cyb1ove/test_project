import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { FC, useContext, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';
import { useDynamicModuleLoader } from 'shared/lib/hooks/useDynamicModuleLoader';
import { Loader } from 'shared/ui/Loader/Loader';

export const ProfilePage: FC = () => {
  // const { namespace, setNamespace } = useContext(I18NamespaceContext);

  // const dispatch = useDispatch();

  // useDynamicModuleLoader({ profile: profileReducer }, true);

  // useLayoutEffect(() => {
  //   setNamespace('profile');
  //   dispatch(fetchProfileData());
  // }, []);

  // if (namespace !== 'profile') {
  //   return <Loader />;
  // }

  return (
    <div>
      <ProfileCard />
    </div>
  );
};
