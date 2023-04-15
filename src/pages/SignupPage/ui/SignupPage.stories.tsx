import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { SignupPage } from './SignupPage';

export default {
  title: 'pages/SignupPage',
  component: SignupPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SignupPage>;

const Template: ComponentStory<typeof SignupPage> = (args) => (
  <SignupPage {...args} />
);

const state = {
  loginForm: {
    username: 'test',
    password: 'test',
    isLoading: false,
  },
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(state)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator(state)];
