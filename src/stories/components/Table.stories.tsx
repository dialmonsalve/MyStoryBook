import { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../components/Table";


const meta = {
  title: 'COMPONENT/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {

  }

} satisfies Meta<typeof Table>

export default meta;

type Story = StoryObj<typeof meta>

export const Black: Story = {
  args: {

  }

}