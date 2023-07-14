import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../../components/UI/Header";


const meta = {
  title: 'UI/Header',
  component: Header,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: { type: 'select' },
  //     options: ['blue', 'green', 'red']
  //   },
  //   justifyContent: {
  //     control: { type: 'radio' },
  //     options: JustifyContent
  //   },
  //   positionNav: {
  //     control: { type: 'radio' },
  //     options: PositionNav
  //   },
  // }

} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>

export const Blue: Story = {
  args: {
    backgroundColor:'#1ea7fd',
    drawerWidth:300,
    space:-24
  }
}
