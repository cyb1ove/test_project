import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, ButtonSize, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
  children: 'Text',
  theme: ThemeButton.CLEAR,
};

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

export const Round = Template.bind({});
Round.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND,
  rounded: true,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.SMALL,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  children: '>',
  theme: ThemeButton.BACKGROUND,
  size: ButtonSize.MEDIUM,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  children: '>',
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
