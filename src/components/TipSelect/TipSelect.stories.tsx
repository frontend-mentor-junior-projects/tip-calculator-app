import { useState } from 'react'

import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import TipSelect from '.'

const meta: Meta<typeof TipSelect> = {
	title: 'Components/TipSelect',
	component: TipSelect,
	args: {
		options: [5, 10, 15, 25, 50],
	},
	argTypes: {
		customTipPercentage: {
			control: false,
		},
		tipPercentage: {
			control: false,
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
		const [tipPercentage, setTipPercentage] = useState<number | undefined>(0)
		const [customTipPercentage, setCustomTipPercentage] = useState<
			string | undefined
		>('')

		return (
			<TipSelect
				options={args.options}
				onChangeTip={(tip: number | undefined) => {
					setTipPercentage(tip)
				}}
				onChangeCustomTip={(tip: string) => {
					setCustomTipPercentage(tip)
				}}
				tipPercentage={tipPercentage}
				customTipPercentage={customTipPercentage}
			/>
		)
	},
}

export default meta
type Story = StoryObj<typeof TipSelect>

export const SelectTip: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const tipButton15 = canvas.getByRole('radio', { name: '15%' })
		await userEvent.click(tipButton15)

		expect(tipButton15).toHaveClass('bg-primary')
	},
}

export const SelectCustomTip: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const customTipInput = canvas.getByPlaceholderText('Custom')
		await userEvent.type(customTipInput, '55')

		const allTipSelectors = canvas.getAllByRole('radio')
		expect(allTipSelectors).not.toContain('bg-neutral-500')
	},
}
