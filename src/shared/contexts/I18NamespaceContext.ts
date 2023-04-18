import React, { Dispatch, SetStateAction } from 'react';

export type NamespaceType = 'main' | 'about' | 'profile';

interface NamespaceContextType {
  namespace?: NamespaceType | null;
  setNamespace?: Dispatch<SetStateAction<NamespaceType>>;
}

export const I18NamespaceContext = React.createContext<NamespaceContextType>({
  namespace: null,
  setNamespace: () => {},
});
