import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../../components/UI/Modal";


const Hide = [
  'fadeout', 'toUp', 'toDown', 'toRight', 'toLeft', 'jumpToLeft', 'jumpToUp'
]

const meta = {
  title: 'UI/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['success', 'danger', 'warning']
    },
    hide: {
      control: { type: 'radio' },
      options: Hide
    }
  }

} satisfies Meta<typeof Modal>


export default meta;

type Story = StoryObj<typeof meta>

export const Danger: Story = {
  args: {
    type: 'danger',
    title: 'Danger',

  }
}
export const Success: Story = {
  args: {
    type: 'success',
    title: 'Success',
    hide: 'toDown'
  }
}

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Warning',
    hide: 'toUp',
  }
}

export const ToLeft: Story = {
  args: {
    type: 'danger',
    title: 'Danger',
    hide: 'toLeft'
  }
}

export const ToRight: Story = {
  args: {
    type: 'success',
    title: 'Success',
    hide: 'toRight'
  }
}

export const ToJumpUp: Story = {
  args: {
    type: 'info',
    title: 'Info',
    hide: 'jumpToUp'
  }
}

