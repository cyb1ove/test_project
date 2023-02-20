import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import HomeIcon from 'shared/assets/icons/home.svg';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';
import { SidebarDecorator } from 'widgets/Sidebar/ui/Sidebar/SidebarDecorator';

import { AppLink, AppLinkTheme } from './AppLink';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  text: 'Text',
  icon: <HomeIcon />,
};
Primary.decorators = [SidebarDecorator(false)];

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Text',
  icon: <HomeIcon />,
  theme: AppLinkTheme.SECONDARY,
};
Secondary.decorators = [SidebarDecorator(false)];

export const Dark = Template.bind({});
Dark.args = {
  text: 'Text',
  icon: <HomeIcon />,
};
Dark.decorators = [ThemeDecorator(Theme.DARK), SidebarDecorator(false)];

export const Collapsed = Template.bind({});
Collapsed.args = {
  text: 'Text',
  icon: <HomeIcon />,
  collapsed: true,
};
Collapsed.decorators = [ThemeDecorator(Theme.DARK), SidebarDecorator(true)];
