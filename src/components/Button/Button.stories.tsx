import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Button',
	},
	decorators: [
		(Story) => {
			return (
				<div className='inline-block rounded bg-neutral-500 p-4'>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Disabled: Story = {
	args: {
		disabled: true,
	},
}
