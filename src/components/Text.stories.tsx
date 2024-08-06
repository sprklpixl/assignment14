import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/test';
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

export const Hover = Template.bind({});
Hover.args = {
  title: 'Hovering',
  content: 'You are now hovering on this text',
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const text = canvas.getByText('Hover Effect Test').parentElement as HTMLElement;

  if (text) {
    // Simulate hover
    await userEvent.hover(text);
    //await expect(card).toHaveStyle('transform: scale(1.05)');

    // Simulate mouse out
    await userEvent.unhover(text);
    //await expect(card).toHaveStyle('transform: scale(1)');
  } else {
    throw new Error('Text element not found');
  }
};