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
	parameters: {
		layout: 'fullscreen',
	},
	decorators: [
		(Story) => {
			return (
				<section className='flex min-w-[375px] flex-col rounded-3xl rounded-b-none bg-white p-8 sm:pl-12 lg:mb-12 lg:grid lg:h-[480px] lg:w-[928px] lg:grid-cols-2 lg:gap-x-12 lg:rounded-b-3xl'>
					<Story />
				</section>
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
