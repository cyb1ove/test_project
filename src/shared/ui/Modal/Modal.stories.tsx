import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/decorators/ThemeDecorator';

import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsam Illum consequuntur sequi quasi similique voluptatibus sit in quaerat ex, cupiditate molestiae! Odio consequuntur fugiat aut beatae mollitia veritatis voluptas?',
  isDisabled: true,
};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsam Illum consequuntur sequi quasi similique voluptatibus sit in quaerat ex, cupiditate molestiae! Odio consequuntur fugiat aut beatae mollitia veritatis voluptas?',
  isDisabled: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
