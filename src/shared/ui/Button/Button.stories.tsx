import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ListIcon from 'shared/assets/icons/list.svg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    PRIMARYColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// @ts-ignore
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  text: 'Hello world',
};

export const EmptyDark = Template.bind({});
EmptyDark.args = {
  text: 'Hello world',
};
EmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  text: 'Hello world',
  theme: ThemeButton.OUTLINE,
};

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  text: 'Hello world',
  theme: ThemeButton.PRIMARY,
};

export const DarkPRIMARY = Template.bind({});
DarkPRIMARY.args = {
  text: 'Hello world',
  theme: ThemeButton.PRIMARY,
};
DarkPRIMARY.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  text: 'Hello world',
  theme: ThemeButton.OUTLINE,
};
DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const Round = Template.bind({});
Round.args = {
  icon: <ListIcon />,
  theme: ThemeButton.PRIMARY,
  children: <Button.Icon svg={ListIcon} />,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  text: 'Hello world',
  theme: ThemeButton.PRIMARY,
  size: ButtonSize.SMALL,
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  text: 'Hello world',
  theme: ThemeButton.PRIMARY,
  size: ButtonSize.MEDIUM,
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  text: 'Hello world',
  theme: ThemeButton.PRIMARY,
  size: ButtonSize.LARGE,
};

export const Squared = Template.bind({});
Squared.args = {
  text: 'RU',
  theme: ThemeButton.PRIMARY,
  size: ButtonSize.MEDIUM,
};

export const WithImage = Template.bind({});
WithImage.args = {
  text: 'Hello world',
  leftElement: <ListIcon />,
};

export const WithImageSizeM = Template.bind({});
WithImageSizeM.args = {
  theme: {
    general: ThemeButton.OUTLINE,
    size: ButtonSize.MEDIUM,
  },
  children: [
    <Button.Extra component={ListIcon} />,
    <Button.Text text="Hello world" />,
  ],
};

export const WithImageSizeMPRIMARY = Template.bind({});
WithImageSizeMPRIMARY.args = {
  text: 'Hello world',
  leftElement: <ListIcon />,
  rightElement: <ListIcon />,
  size: ButtonSize.LARGE,
  theme: ThemeButton.PRIMARY,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  pending: true,
  theme: ThemeButton.PRIMARY,
  text: 'test',
};
