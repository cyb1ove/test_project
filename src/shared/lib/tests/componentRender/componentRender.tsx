import { render } from '@testing-library/react';
import {
  StableNavigateContext,
  StableNavigateContextProvider,
} from 'app/providers/StableNavigateContextProvider/ui/StableNavigateContextProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ReactElement } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from 'shared/config/i18n/i18nForText';

export interface ComponentRenderOptions {
  route?: string;
}

export function componentRender(
  component: ReactElement,
  options: ComponentRenderOptions = {}
) {
  const { route = '/' } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StableNavigateContextProvider>
        <StoreProvider>
          <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </StoreProvider>
      </StableNavigateContextProvider>
    </MemoryRouter>
  );
}
