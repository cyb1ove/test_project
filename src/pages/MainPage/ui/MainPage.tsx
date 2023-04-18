import { useContext, useLayoutEffect } from 'react';
import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';

export const MainPage = () => {
  // const { namespace, setNamespace } = useContext(I18NamespaceContext);

  // useLayoutEffect(() => {
  //   setNamespace('main');
  // }, []);

  // if (namespace !== 'main') {
  //   return <Loader />;
  // }

  return (
    <div>
      <Text title="Главная страница" />
    </div>
  );
};
