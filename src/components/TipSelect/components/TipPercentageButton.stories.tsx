import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import TipPercentageButton from './TipPercentageButton'

const meta: Meta<typeof TipPercentageButton> = {
	title: 'Components/Tip Percentage Button',
	component: TipPercentageButton,
	args: {
		percentage: 5,
		selected: false,
	},
	render: (args) => {
		const [percentage, setPercentage] = useState<number | undefined>()

		return (
			<TipPercentageButton
				selected={percentage === args.percentage}
				percentage={args.percentage}
				onClick={() => {
					setPercentage(args.percentage)
				}}
			/>
		)
	},
}

export default meta
type Story = StoryObj<typeof TipPercentageButton>

export const Default: Story = {}

export const Selected: Story = {
	args: {
		selected: true,
	},
}
