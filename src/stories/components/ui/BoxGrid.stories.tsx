import { Meta, StoryObj } from "@storybook/react"
import { BoxGrid } from "../../../components/UI/BoxGrid"


const justifyContent = [
  'start', 'end', 'center', 'stretch', 'space-around', 'space-between', 'space-evenly'
]

const justifyItems = ['start', 'end', 'center', 'stretch'];

const meta = {
  title: 'UI/BoxGrid',
  component: BoxGrid,
  tags: ['autodocs'],
  argTypes: {
    alignContent: {
      control: 'select',
      options: justifyContent
    },
    justifyItems: {
      control: 'select',
      options: justifyItems
    },
    width: { type: 'number' },
    height: { type: 'number' },
  }

} satisfies Meta<typeof BoxGrid>


type Story = StoryObj<typeof meta>;

export default meta;

export const Center: Story = {
  args: {
    columns: 2,
    justifyItems: 'start',
    alignContent: 'end',
    padding: 20,
    gap: 20,
  }
}