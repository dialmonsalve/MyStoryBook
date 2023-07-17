import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../../../components/animations/Spinner';


const meta = {
  title: 'ANIMATIONS/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {

  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LP: Story = {
  args: {
    type:'long-play'
  },
};


export const HalfCircle: Story = {
  args: {
    type:'half-circle'
  },
};

// export const Transparent: Story = {
//   args: {

//   },
// };

// export const Large: Story = {
//   args: {

//   },
// };

// export const Small: Story = {
//   args: {

//   },
// };
