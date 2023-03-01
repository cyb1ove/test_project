import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { LoginModal } from './LoginModal';

export default {
  title: 'features/LoginModal',
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
};
Light.decorators = [
  StoreDecorator({
    loginForm: {
      username: 'guy',
      password: 'password',
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: 'guy',
      password: 'password',
    },
  }),
];

export const WithError = Template.bind({});
WithError.args = {
  isOpen: true,
};
WithError.decorators = [
  StoreDecorator({
    loginForm: {
      error: 'Big Bang Error',
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {
  isOpen: true,
};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];
