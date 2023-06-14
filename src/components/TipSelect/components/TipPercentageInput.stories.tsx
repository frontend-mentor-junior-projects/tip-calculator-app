import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import TipPercentageInput from './TipPercentageInput'

const meta: Meta<typeof TipPercentageInput> = {
	title: 'Components/Tip Percentage Input',
	component: TipPercentageInput,
	args: {
		value: '55',
	},
	render: (args) => {
		const [text, setText] = useState(args.value)

		return (
			<TipPercentageInput
				value={text}
				onChange={(e) => {
					setText(e.target.value)
				}}
			/>
		)
	},
}

export default meta
type Story = StoryObj<typeof TipPercentageInput>

export const Default: Story = {}
