import { addDecorator } from '@storybook/react'
import { StyleDecorator } from '../../src/shared/config/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/decorators/RouterDecorator';
import { I18nDecorator } from '../../src/shared/config/decorators/I18nDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  a11y: {
    element: '#storybook-root',
    config: {},
    options: {},
    manual: true,
  },
}

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(I18nDecorator);
addDecorator(RouterDecorator);
