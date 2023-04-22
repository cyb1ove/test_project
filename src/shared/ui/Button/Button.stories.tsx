import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import ListIcon from 'shared/assets/icons/list.svg';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

import { Button, ButtonSize, ShapedTypes, ThemeButton } from './Button';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    PRIMARYColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  theme: { general: ThemeButton.EMPTY },
  children: 'Hello world',
};

export const EmptyDark = Template.bind({});
EmptyDark.args = {
  theme: { general: ThemeButton.EMPTY },
  children: 'Hello world',
};
EmptyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  theme: { general: ThemeButton.OUTLINE },
  children: 'Hello world',
};

export const PRIMARY = Template.bind({});
PRIMARY.args = {
  theme: { general: ThemeButton.PRIMARY },
  children: 'Hello world',
};

export const DarkPRIMARY = Template.bind({});
DarkPRIMARY.args = {
  theme: { general: ThemeButton.PRIMARY },
  children: 'Hello world',
};
DarkPRIMARY.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkOutline = Template.bind({});
DarkOutline.args = {
  theme: { general: ThemeButton.OUTLINE },
  children: 'Hello world',
};
DarkOutline.decorators = [ThemeDecorator(Theme.DARK)];

export const Round = Template.bind({});
Round.args = {
  theme: { general: ThemeButton.PRIMARY, shaped: ShapedTypes.CIRCLE },
  children: <Button.Icon svg={ListIcon} />,
};

export const SizeSmall = Template.bind({});
SizeSmall.args = {
  theme: { general: ThemeButton.PRIMARY, size: ButtonSize.SMALL },
  children: 'Hello world',
};

export const SizeMedium = Template.bind({});
SizeMedium.args = {
  theme: { general: ThemeButton.PRIMARY, size: ButtonSize.MEDIUM },
  children: 'Hello world',
};

export const SizeLarge = Template.bind({});
SizeLarge.args = {
  theme: { general: ThemeButton.PRIMARY, size: ButtonSize.LARGE },
  children: 'Hello world',
};

export const Squared = Template.bind({});
Squared.args = {
  theme: { general: ThemeButton.PRIMARY },
  children: <Button.Icon svg={ListIcon} />,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  theme: { general: ThemeButton.OUTLINE, size: ButtonSize.MEDIUM },
  collapsed: true,
  children: [
    <Button.Text text="Hello world" />,
    <Button.Extra component={ListIcon} />,
  ],
};

export const WithImage = Template.bind({});
WithImage.args = {
  theme: {
    general: ThemeButton.PRIMARY,
    size: ButtonSize.SMALL,
  },
  children: [
    <Button.Text text="Hello world" />,
    <Button.Extra component={ListIcon} />,
  ],
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
  theme: {
    general: ThemeButton.SECONDARY,
    size: ButtonSize.LARGE,
  },
  children: [
    <Button.Extra component={ListIcon} />,
    <Button.Text text="Hello world" />,
    <Button.Extra component={ListIcon} />,
  ],
};

export const CustomLayout = Template.bind({});
CustomLayout.args = {
  theme: {
    general: ThemeButton.OUTLINE,
    size: ButtonSize.MEDIUM,
  },
  children: [
    <Button.Extra component={ListIcon} />,
    <Button.Text text="Hello world" align="left" offset={3} />,
  ],
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  theme: { general: ThemeButton.PRIMARY },
  pending: true,
  children: 'test',
};
