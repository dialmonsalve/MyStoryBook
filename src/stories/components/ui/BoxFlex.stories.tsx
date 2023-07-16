import { Meta, StoryObj } from "@storybook/react"
import { BoxFlex } from "../../../components/UI/BoxFlex"


const alignContent = [
  'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch', 'start', 'end', 'baseline', 'first baseline', 'last baseline', 'unsafe'
]

const justifyContent = [
  'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'start', 'end', 'left', 'unsafe'
]
const meta = {
  title: 'UI/BoxFlex',
  component: BoxFlex,
  tags: ['autodocs'],
  argTypes: {
    alignContent: {
      control: 'select',
      options: alignContent
    },
    justifyContent: {
      control: 'select',
      options: justifyContent
    },
    flexDirection: {
      control: 'radio',
      options: ['row', 'column']
    }
  }

} satisfies Meta<typeof BoxFlex>


type Story = StoryObj<typeof meta>;

export default meta;

export const Center: Story = {
  args: {
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'end',
    // children: <Card/>
  }
}