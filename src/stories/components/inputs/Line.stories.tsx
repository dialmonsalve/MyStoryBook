import { Meta, StoryObj } from "@storybook/react";

import { Line } from "../../../components/Line";


const meta = {
  title: 'INPUT/Line',
  component: Line,
  tags: ['autodocs'],
  argTypes: {

  }

} satisfies Meta<typeof Line>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Black: Story = {
  args: {
    color: 'black',
    size: 2,
    style: 'solid',
    width: 250,    
  }
}

export const Vertical: Story = {
  args: {
    color: 'red',
    size: 2,
    style: 'solid',
    height: 520,
    typeLine:'vertical',
  }
}