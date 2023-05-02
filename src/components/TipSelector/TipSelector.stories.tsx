import { Meta, StoryObj } from '@storybook/react'

import TipSelector from '.'

const meta: Meta<typeof TipSelector> = {
	title: 'Components/Tip Selector',
	component: TipSelector,
	argTypes: {
		custom: {
			options: [true],
			control: 'select',
		},
	},
}

export default meta
type Story = StoryObj<typeof TipSelector>

export const Default: Story = {
	args: {
		percentage: 5,
	},
}

export const Custom: Story = {
	args: {
		custom: true,
	},
}

export const Selected: Story = {
	args: {
		percentage: 15,
		selected: true,
	},
}
