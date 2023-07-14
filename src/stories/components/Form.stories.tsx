import type { Meta, StoryObj } from '@storybook/react';
import { Form } from "../../components/Form";

const meta = {
  title: 'COMPONENT/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    initialBg: { control: 'color' },
    middleBg: { control: 'color' },
    finalBg: { control: 'color' },
  }
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>

export const Black: Story = {
  args: {
    columns: 1,
    degree: 135,
    width:40
  }
}
export const Purple: Story = {
  args: {
    columns: 2,
    degree: 90,
    initialBg: '#d32bd6',
    middleBg: '#592f66',
    finalBg: '#590042',
    width:40
  }
}