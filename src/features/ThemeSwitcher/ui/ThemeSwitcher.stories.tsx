import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { SidebarDecorator } from 'widgets/Sidebar/ui/Sidebar/SidebarDecorator';

import { ThemeSwitcher } from './ThemeSwitcher';

export default {
  title: 'features/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => (
  <ThemeSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [SidebarDecorator(false)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), SidebarDecorator(false)];

export const Collapsed = Template.bind({});
Collapsed.args = {
  collapsed: true,
};
Collapsed.decorators = [SidebarDecorator(true)];
