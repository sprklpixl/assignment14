import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import RadioButton, { RadioButtonProps } from './RadioButton';

export default {
  title: 'Portfolio/RadioButton',
  component: RadioButton,
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Sample Radio',
  name: 'sample-radio',
  value: 'active',
  checked: true,
  //onChange: () => alert('Radio button clicked!'),
  disabled: false,
};

Default.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const radioButton = canvas.getByRole('radio');
  await userEvent.click(radioButton);
  await expect(radioButton).toBeChecked();
}

export const Disabled = Template.bind({});
Default.args = {
  label: 'Sample Radio',
  name: 'sample-radio',
  value: 'inactive',
  checked: false,
  //onChange: () => alert('Radio button clicked!'),
  disabled: true,
};