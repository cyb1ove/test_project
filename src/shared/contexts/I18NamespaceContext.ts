import React, { Dispatch, SetStateAction } from 'react';

export type NamespaceType = 'main' | 'about';

interface NamespaceContextType {
  namespace: NamespaceType;
  setNamespace: Dispatch<SetStateAction<NamespaceType>>;
}

export const I18NamespaceContext = React.createContext<NamespaceContextType>({
  namespace: null,
  setNamespace: () => {},
});
