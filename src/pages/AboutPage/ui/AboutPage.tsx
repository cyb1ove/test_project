import { useContext, useLayoutEffect } from 'react';
import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';
import { Loader } from 'shared/ui/Loader/Loader';
import { Text } from 'shared/ui/Text/Text';

export const AboutPage = () => {
  const { namespace, setNamespace } = useContext(I18NamespaceContext);

  useLayoutEffect(() => {
    setNamespace('about');
  }, [setNamespace]);

  if (namespace !== 'about') {
    return <Loader />;
  }

  return <Text title="О сайте" />;
};
