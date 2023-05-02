/* eslint-disable react/no-unescaped-entities */

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

	return (
		<div className='flex flex-col'>
			<div className='flex flex-row justify-between'>
				<label htmlFor={type} className='mb-2 font-bold text-neutral-500'>
					{label}
				</label>

				{value === '0' && (
					<p className='font-bold text-[#C68B7B]'>Can't be zero</p>
				)}

				{!isValidNumber(value) && value && (
					<p id='error-message' className='font-bold text-[#C68B7B]'>
						Invalid number
					</p>
				)}

				{isValidNumber(value) && Number(value) > 10000 && (
					<p id='error-message' className='font-bold text-[#C68B7B]'>
						Maximum number
					</p>
				)}
			</div>

			<div className='relative'>
				<img
					alt='icon'
					src={ICONS[type]}
					className='absolute left-4 top-4 w-3'
				/>

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
