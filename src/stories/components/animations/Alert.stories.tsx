import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../../../components/animations/Alert";

const ToastDirection = [
  'toUp', 'toRight', 'toDown', 'toLeft', 'toFade',
  'jumpToUp', 'jumpToRight', 'jumpToDown', 'jumpToLeft', 'jumpToDown'
]
const meta = {
  title: 'ANIMATIONS/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ToastDirection
    }
  }

} satisfies Meta<typeof Alert>

export default meta;

type Story = StoryObj<typeof meta>

export const ToUp: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'toUp',
    type: 'success'
  }
}

export const ToRight: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'toRight',
    type: 'danger'
  }
}

export const ToDown: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'toDown',
    type: 'info'
  }
}

export const ToLeft: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'toLeft',
    type: 'warning'
  }
}
export const JumpToUp: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'jumpToUp',
    type: 'success'
  }
}

export const JumpToRight: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'jumpToRight',
    type: 'danger'
  }
}

export const JumpToDown: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'jumpToDown',
    type: 'info'
  }
}

export const JumpToLeft: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'jumpToLeft',
    type: 'warning'
  }
}

export const ToFade: Story = {
  args: {
    message: 'User create satisfactory',
    direction: 'toFade',
    type: 'warning'
  }
}