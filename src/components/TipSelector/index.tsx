type CustomProps = {
	custom: true
	percentage?: null
	selected?: null
	onClick?: null
	value: string | undefined
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export type TipPercentages = 5 | 10 | 15 | 25 | 50

type ValueProps = {
	custom?: false
	percentage: TipPercentages
	selected: boolean
	onClick: () => void
	value?: null
	onChange?: null
}

type TipSelectorProps = CustomProps | ValueProps

const TipSelector = ({
	custom,
	percentage,
	selected,
	onClick,
	value,
	onChange,
}: TipSelectorProps) => {
	if (custom) {
		return (
			<input
				type='text'
				placeholder='Custom'
				value={value}
				onChange={onChange}
				className='h-12 w-[116px] rounded bg-neutral-100 px-4 font-bold text-neutral-500 caret-primary outline-none placeholder:text-center placeholder:text-neutral-300 focus:border-2 focus:border-primary focus:text-right'
			/>
		)
	}

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/interactive-supports-focus
		<div
			role='button'
			id={`tip-amount-${percentage}`}
			className={`flex h-12 w-[116px] flex-col items-center justify-center rounded bg-neutral-500 hover:cursor-pointer hover:bg-neutral-200 hover:text-neutral-500 ${
				selected ? 'bg-primary text-neutral-500' : 'text-white'
			}`}
			onClick={onClick}
		>
			<p className='font-bold'>{percentage}%</p>
		</div>
	)
}

export default TipSelector
