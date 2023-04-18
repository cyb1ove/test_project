import './shared/config/i18n/i18n';

import { ErrorBoundary } from 'app/providers/ErrorBoundary/ui/ErrorBoundary';
import { StableNavigateContextProvider } from 'app/providers/StableNavigateContextProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { App } from './app/App';

render(
  <React.StrictMode>
    <BrowserRouter>
      <StableNavigateContextProvider>
        <StoreProvider>
          <ErrorBoundary>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </ErrorBoundary>
        </StoreProvider>
      </StableNavigateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.querySelector('#root')
);
