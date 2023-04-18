import { Story } from '@storybook/react';
import { I18NamespaceContext } from 'shared/contexts/i18NamespaceContext';

export const ContextsDecorator = (story: () => Story) => (
  <I18NamespaceContext.Provider value={{}}>
    {story()}
  </I18NamespaceContext.Provider>
);
