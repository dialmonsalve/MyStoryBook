import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../../../components/Input/Select';

const meta = {
  title: 'INPUT/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type:'radio'},
      options:['small' , 'medium', 'large']
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
  args: {
    color:'white',
    backgroundColor:'#1ea7fd',
    size:'small'
  }
};

export const Transparent: Story = {
  args: {
    color:'black',
    size:'large'
  }
};

