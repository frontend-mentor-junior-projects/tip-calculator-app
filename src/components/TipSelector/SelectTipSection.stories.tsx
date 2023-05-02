import { useState } from 'react'

import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import TipSelector, { TipPercentages } from '.'

const SelectTipSection = () => {
	const [tipPercentage, setTipPercentage] = useState<number | undefined>()
	const [customTipPercentage, setCustomTipPercentage] = useState<
		string | undefined
	>()

	const TIP_PERCENTAGES: TipPercentages[] = [5, 10, 15, 25, 50]

	return (
		<div className='w-1/3 font-bold'>
			<p className='mb-4 text-neutral-500'>Select Tip %</p>
			<div className='grid grid-cols-3 grid-rows-2 gap-y-4'>
				{TIP_PERCENTAGES.map((percentage) => {
					const selected = customTipPercentage
						? false
						: tipPercentage === percentage

					return (
						<TipSelector
							key={percentage}
							percentage={percentage}
							selected={selected}
							onClick={() => {
								setTipPercentage(percentage)
								setCustomTipPercentage('')
							}}
						/>
					)
				})}
				<TipSelector
					custom
					value={customTipPercentage}
					onChange={(event) => {
						setTipPercentage(undefined)
						setCustomTipPercentage(event.target.value)
					}}
				/>
			</div>
		</div>
	)
}

const meta: Meta<typeof SelectTipSection> = {
	title: 'Templates/Select Tip Section',
	component: SelectTipSection,
}

export default meta
type Story = StoryObj<typeof SelectTipSection>

export const SelectTip: Story = {
	render: () => {
		return <SelectTipSection />
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const tipButton15 = canvas.getByRole('button', { name: '15%' })
		await userEvent.click(tipButton15)

		expect(tipButton15).toHaveStyle({
			'background-color': 'rgb(38, 192, 171)',
		})
	},
}

export const SelectCustomTip: Story = {
	render: () => {
		return <SelectTipSection />
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const customTipInput = canvas.getByPlaceholderText('Custom')
		await userEvent.type(customTipInput, '55')

		const allTipSelectors = canvas.getAllByRole('button')
		expect(allTipSelectors).not.toContain('bg-neutral-500')
	},
}
