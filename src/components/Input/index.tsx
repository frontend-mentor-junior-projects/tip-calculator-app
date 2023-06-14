const ICONS = {
	bill: '/assets/images/icon-dollar.svg',
	people: '/assets/images/icon-person.svg',
}

type InputProps = {
	type: 'bill' | 'people'
	label: string
	value: string | undefined
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ type, label, value, onChange }: InputProps) => {
	const isValidNumber = (str: string | undefined) => {
		if (!str) {
			return false
		}

		return !Number.isNaN(str) && !Number.isNaN(parseFloat(str))
	}

	const MAXIMUM_NUMBER = 10000

	const isZero = value === '0'
	const isLessThanZero = value && value < '0'
	const isMaximumNumber = isValidNumber(value) && Number(value) > MAXIMUM_NUMBER

	return (
		<div className='flex flex-col'>
			<div className='flex flex-row justify-between'>
				<label htmlFor={type} className='mb-2 font-bold text-neutral-500'>
					{label}
				</label>

				<span
					role='alert'
					aria-live='polite'
					aria-atomic
					className='text-right font-bold text-[#C68B7B]'
				>
					{isZero && "Can't be zero"}
					{isLessThanZero && "Can't be less than zero"}
					{isMaximumNumber && (
						<span aria-label={`Can't be more than ${MAXIMUM_NUMBER}`}>
							Number too large
						</span>
					)}
				</span>
			</div>

			<div className='relative'>
				<img alt='' src={ICONS[type]} className='absolute left-4 top-4 w-3' />

				<input
					id={type}
					type='number'
					placeholder='0'
					value={value}
					onChange={onChange}
					className='h-12 w-full rounded bg-neutral-100 px-4 text-right font-bold text-neutral-500 caret-primary outline-none [appearance:textfield] placeholder:text-neutral-300 focus:border-2 focus:border-primary [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
				/>
			</div>
		</div>
	)
}

export default Input
