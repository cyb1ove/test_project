import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonRoundedTypes, ButtonSize, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};

export const Background = Template.bind({});
Background.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
};

export const DarkBackground = Template.bind({});
DarkBackground.args = {
  children: 'Text',
};
DarkBackground.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  children: 'Text',
  theme: ThemeButton.OUTLINE,
};
DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const Round = Template.bind({});
Round.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND,
  rounded: ButtonRoundedTypes.FULL,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.SMALL,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.MEDIUM,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: 'Text',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.LARGE,
};

export const Squared = Template.bind({});
Squared.args = {
  children: 'RU',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.LARGE,
  squared: true,
};
