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
