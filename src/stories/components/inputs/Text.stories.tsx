import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../../components/Input/Input';


const meta = {
  title: 'INPUT/Text',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select' },
    size: { control: 'radio' }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    backgroundColor: '#646cff',
    borderBottomColor: '#6aff00',
    color: '#000000',
    size: 'small',
    type: 'text',
  }
}

export const Email: Story = {
  args: {
    backgroundColor: 'blue',
    borderBottomColor: 'red',
    color: 'yellow',
    size: 'medium',
    type: 'email',
  }
}

export const Password: Story = {
  args: {
    borderBottomColor: '#6aff00',
    color: '#000000',
    size: 'large',
    type: 'password',
  }
}

export const Number: Story = {
  args: {
    color: '#000000',
    type: 'number',
    borderBottomColor: '#6aff00',
    width: '5%',
  }
}
export const Tel: Story = {
  args: {
    color: 'red',
    type: 'tel',
    borderBottomColor: '#6aff00',
  }
}