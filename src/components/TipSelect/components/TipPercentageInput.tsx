import { ForwardedRef, forwardRef } from 'react'

type TipPercentageInputProps = {
	value: string | undefined
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TipPercentageInput = (
	{ value, onChange }: TipPercentageInputProps,
	ref: ForwardedRef<HTMLInputElement>
) => {
	return (
		<input
			ref={ref}
			type='number'
			value={value}
			placeholder='Custom'
			tabIndex={-1}
			aria-label='Custom tip %'
			aria-placeholder='55%'
			onChange={onChange}
			className='h-12 min-w-[116px] rounded bg-neutral-100 px-4 font-bold text-neutral-500 caret-primary outline-none placeholder:text-center placeholder:text-neutral-300 focus:border-2 focus:border-primary focus:text-right'
		/>
	)
}

export default forwardRef(TipPercentageInput)
