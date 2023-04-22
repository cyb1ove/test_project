import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { UserMenu } from './UserMenu';

export default {
  title: 'feature/UserMenu',
  component: UserMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof UserMenu>;

const Template: ComponentStory<typeof UserMenu> = (args) => (
  <UserMenu {...args} />
);

const store = {
  user: {
    authData: {
      username: 'slave',
      avatar: 'https://pbs.twimg.com/media/EYxQuxvWkAETUfb.jpg',
    },
  },
};

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator(store)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StoreDecorator(store), ThemeDecorator(Theme.DARK)];

export const LightCollapsed = Template.bind({});
LightCollapsed.args = {
  collapsed: true,
};
LightCollapsed.decorators = [StoreDecorator(store)];

export const DarkCollapsed = Template.bind({});
DarkCollapsed.args = {
  collapsed: true,
};
DarkCollapsed.decorators = [StoreDecorator(store), ThemeDecorator(Theme.DARK)];
