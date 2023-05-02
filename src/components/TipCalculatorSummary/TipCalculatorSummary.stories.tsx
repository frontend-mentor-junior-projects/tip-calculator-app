import { Meta, StoryObj } from '@storybook/react'

import TipCalculatorSummary from '.'

const meta: Meta<typeof TipCalculatorSummary> = {
	title: 'Components/Tip Calculator Summary',
	component: TipCalculatorSummary,
}

export default meta
type Story = StoryObj<typeof TipCalculatorSummary>

export const Default: Story = {
	args: {
		label: 'Tip Amount',
		value: 4.27,
	},
	decorators: [
		(Story) => {
			return (
				<div className='w-1/3 rounded bg-neutral-500 px-6'>
					<Story />
				</div>
			)
		},
	],
}
