import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Form } from './Form';

export default {
  title: 'shared/Form',
  component: Form,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const WithError = Template.bind({});
WithError.args = {
  error: 'Wrong value',
};
