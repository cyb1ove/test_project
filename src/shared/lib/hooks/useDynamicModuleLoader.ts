import { Reducer } from '@reduxjs/toolkit';
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from 'app/providers/StoreProvider/config/StateSchema';
import { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducerList = {
  [key in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

export const useDynamicModuleLoader = (
  reducer: ReducerList,
  removeAfterUnmount?: boolean
) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducer).forEach(([key, reducer]: ReducerListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducer).forEach(([key, _]: ReducerListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
