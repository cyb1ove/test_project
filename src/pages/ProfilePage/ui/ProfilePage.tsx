import { ProfileCard } from 'entities/Profile';
import { FC } from 'react';
// import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';

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
