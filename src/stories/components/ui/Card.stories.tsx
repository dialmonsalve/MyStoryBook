import { Meta, StoryObj } from "@storybook/react";
import { Card } from "../../../components/Card/Card";

const meta = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    initialBg: { control: 'color' },
    middleBg: { control: 'color' },
    finalBg: { control: 'color' },
    hover: { control: 'color' },
  }

} satisfies Meta<typeof Card>

export default meta;

type Story = StoryObj<typeof meta>

export const Gradient: Story = {
  args: {
    finalBg: '#000000',
    hasGradient: true,
    initialBg: '#131212',
    middleBg: '#414b34',
    degrees: 120,
    height:45,
  }
}
export const Black: Story = {
  args: {
    background: '#131212',
    hasGradient: false,
    hover: '#221e1e',
  }
}
