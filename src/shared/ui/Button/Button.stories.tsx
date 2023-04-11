import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ShapedTypes, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  children: 'Hello world',
  theme: ThemeButton.OUTLINE,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Hello world',
  theme: ThemeButton.BACKGROUND,
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  children: 'Hello world',
};
DarkBackground.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  children: 'Hello world',
  theme: ThemeButton.OUTLINE,
};
DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const Round = Template.bind({});
Round.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND,
  shaped: ShapedTypes.CIRCLE,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: 'Hello world',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.SMALL,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: 'Hello world',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.MEDIUM,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'Hello world',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.LARGE,
};

export const Squared = Template.bind({});
Squared.args = {
  children: 'RU',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.MEDIUM,
  shaped: ShapedTypes.SQUARE,
};
