import { ForwardedRef, forwardRef } from 'react'

type TipPercentageButtonProps = {
	percentage: number
	selected: boolean
	onClick: () => void
}

const TipPercentageButton = (
	{ selected, percentage, onClick }: TipPercentageButtonProps,
	ref: ForwardedRef<HTMLButtonElement>
) => {
	return (
		<button
			role='radio'
			ref={ref}
			tabIndex={selected ? 0 : -1}
			aria-checked={selected}
			type='button'
			id={`tip-amount-${percentage}`}
			className={`flex h-12 min-w-[116px] flex-col items-center justify-center rounded bg-neutral-500 transition duration-300 ease-out hover:cursor-pointer hover:bg-neutral-200 hover:text-neutral-500
      ${selected ? 'bg-primary text-neutral-500' : 'text-white'}`}
			onClick={onClick}
		>
			<span className='font-bold'>{percentage}%</span>
		</button>
	)
}

export default forwardRef(TipPercentageButton)
