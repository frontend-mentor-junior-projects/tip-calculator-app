import { useState } from 'react'

import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import Input from '.'

const meta: Meta<typeof Input> = {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		type: {
			options: ['bill', 'people'],
			control: 'select',
		},
		value: {
			control: 'string',
		},
	},
	decorators: [
		(Story) => {
			return (
				<div className='w-1/3'>
					<Story />
				</div>
			)
		},
	],
	render: (args) => {
		const [value, setValue] = useState<string | undefined>()

		return (
			<Input
				type={args.type || 'people'}
				label={args.label || 'Number of People'}
				value={value}
				onChange={(event) => {
					setValue(event.target.value)
				}}
			/>
		)
	},
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
	args: {
		type: 'bill',
		label: 'Bill',
	},
}

export const FilledInputZero: Story = {
	name: 'Input Is Zero',
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const input = canvas.getByRole('spinbutton')
		userEvent.type(input, '0')

		const errorMessage = canvas.getByText("Can't be zero")
		expect(errorMessage).toBeInTheDocument()
	},
}

export const FilleInputMaxNumber: Story = {
	name: 'Maximum Number',
	play: ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const input = canvas.getByRole('spinbutton')
		userEvent.type(input, '10001')

		const errorMessage = canvas.getByText('Maximum number')
		expect(errorMessage).toBeInTheDocument()
	},
}
