import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../components/Input/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'INPUT/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type:'select'},
      options:['blue' , 'green', 'red']
    },
    size: {
      control: { type:'radio'},
      options:['small' , 'medium', 'large']
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Blue: Story = {
  args: {
    label: 'Create',
    hasBackground: true,
    size:'medium',
    isAnimated:false
  },
};

export const Transparent: Story = {
  args: {
    label: 'Create',
    backgroundColor:'red',
    hasBackground: false,
    size: 'large',
    isAnimated:false
  },
};

export const Large: Story = {
  args: {
    label: 'Create',
    backgroundColor:'blue',
    hasBackground: true,
    size: 'large',
    isAnimated:false
  },
};

export const Small: Story = {
  args: {
    label: 'Create',
    backgroundColor:'blue',
    hasBackground: true,
    size: 'small',
    isAnimated:false
  },
};

export const Submit: Story = {
  args: {
    label: 'Create',
    backgroundColor:'green',
    hasBackground: true,
    size: 'small',
    isAnimated:false,
    type:'submit'
  },
};
