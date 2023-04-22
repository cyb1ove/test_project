import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Text, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
  text: 'cyb1ove.ua@gmail.com',
  title: 'Андрей Зайкин',
};

export const Dark = Template.bind({});
Dark.args = {
  text: 'Lorem ipsum dolor sit',
  title: 'Lorem ipsum dolor sit',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithError = Template.bind({});
WithError.args = {
  text: 'Lorem ipsum dolor sit',
  title: 'Lorem ipsum dolor sit',
  theme: TextTheme.ERROR,
};
