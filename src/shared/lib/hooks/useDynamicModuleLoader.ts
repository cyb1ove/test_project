import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
};

export const useDynamicModuleLoader = (
  reducer: ReducersList,
  removeAfterUnmount?: boolean
) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducer).forEach(([key, reducer]) => {
      store.reducerManager.add(key as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducer).forEach(([key, _]) => {
          store.reducerManager.remove(key as StateSchemaKey);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
  }, []);
};
