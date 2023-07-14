import { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "../../../components/UI/Navbar";

const JustifyContent = [
  'center',
  'flex-end',
  'flex-start',
  'space-around',
  'space-between',
  'space-evenly',
]

const PositionNav = [
  'center',
  'flex-end',
  'flex-start',
]

const meta = {
  title: 'UI/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: { type: 'select' },
      options: ['blue', 'green', 'red']
    },
    justifyContent: {
      control: { type: 'radio' },
      options: JustifyContent
    },
    positionNav: {
      control: { type: 'radio' },
      options: PositionNav
    },
  }

} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    hasBackground: true,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    positionNav:'flex-end',
    device:'tab-port phone',
  }
}


export const Green: Story = {
  args: {
    hasBackground: true,
    backgroundColor: 'green',
    justifyContent: 'space-around',
    width: 80
  }
}

export const Red: Story = {
  args: {
    backgroundColor: 'red',
    justifyContent: 'space-between',
    hasBackground: false,
  }
}