import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent, expect } from '@storybook/test';
import Image, { ImageProps } from './Image';

export default {
  title: 'Portfolio/Image',
  component: Image,
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/300x200',
  alt: 'Sample Image',
  borderRadius: '8px',
};

export const Hover = Template.bind({});
Hover.args = {
  title: 'Hover Effect',
  src: 'https://via.placeholder.com/300x200',
  alt: 'Sample Image',
};

Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const image = canvas.getByText('Hover Effect').parentElement as HTMLElement;

  if (image) {
    // Simulate hover
    await userEvent.hover(image);
    //await expect(card).toHaveStyle('transform: scale(1.05)');

    // Simulate mouse out
    await userEvent.unhover(image);
    await expect(image).toHaveStyle('background-color: #000000');
  } else {
    throw new Error('Image element not found');
  }
};
