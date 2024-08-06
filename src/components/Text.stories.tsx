import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, expect } from '@storybook/test';
import Text, { TextProps } from './Text';

export default {
  title: 'Portfolio/Text',
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Sample Title',
  content: 'This is a sample text content.',
};

Default.play = async ({canvasElement}) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Project Name');
  await expect(text).toBeInTheDocument();
}