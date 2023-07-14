import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '../../components/Anchor';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'INPUT/Anchor',
  component: Anchor,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large']
    },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Blue: Story = {
  args: {
    label: 'Blue',
    hasBackground: true,
    size: 'medium',
    href: '/?path=/story/input-anchor--blue&args=size:small',
    backgroundColor: '#646cff',
    color: 'white'
  },
};

export const Transparent: Story = {
  args: {
    label: 'Transparent',
    size: 'large',
    href: '',
    hasBackground: false,
  },
};

export const Large: Story = {
  args: {
    label: 'Create',
    backgroundColor: 'yellow',
    size: 'large',
    href: ''
  },
};

export const Small: Story = {
  args: {
    label: 'Create',
    backgroundColor: 'blue',
    hasBackground: true,
    size: 'small',
    color: 'white',
    href: ''
  },
};
