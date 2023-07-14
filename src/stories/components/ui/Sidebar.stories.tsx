import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from "../../../components/UI/Sidebar";

const meta = {
  title:'UI/Sidebar',
  component: Sidebar,
  tags: ['autodocs'],
  argTypes: {

  }

}satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Black:Story = {
  args:{
    backgroundColor:'',
    drawerWidth:250
  }
}
export const Purple:Story = {
  args:{
    backgroundColor:'#7720b4',
    drawerWidth:250,
    isAnimated:true
  }
}