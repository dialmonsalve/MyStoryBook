import type { Meta, StoryObj } from '@storybook/react';
import { Label } from "../../components/Label"

const meta = {
  title: 'TAG/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['normal', 'h1', 'h2', 'h3', 'paragraph']
      }
    },
    fontColor: { control: 'color' },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    uppercase: true,
    size: 'normal',
  },
};

export const AllCaps: Story = {
  args: {
    size: 'h1',
    uppercase: false,
  },
};

export const Secondary: Story = {
  args: {
    size: 'h2',
    uppercase: true,
  },
};

export const Tertiary: Story = {
  args: {
    size: 'h3',
  },
};