// import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';
import { Text } from 'shared/ui/Text/Text';

export const AboutPage = () => {
  // const { namespace, setNamespace } = useContext(I18NamespaceContext);

  // useLayoutEffect(() => {
  //   setNamespace('about');
  // }, [setNamespace]);

  // if (namespace !== 'about') {
  //   return <Loader />;
  // }

  return (
    <div>
      <Text title="О сайте" />
    </div>
  );
};
