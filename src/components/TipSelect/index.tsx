import { createRef, useRef } from 'react'

import { Keys } from 'utils/constants'

import TipPercentageButton from './components/TipPercentageButton'
import TipPercentageInput from './components/TipPercentageInput'

type TipSelectProps = {
	options: number[]
	onChangeTip: (tip: number | undefined) => void
	onChangeCustomTip: (tip: string) => void
	customTipPercentage: string | undefined
	tipPercentage: number | undefined
}

const TipSelect = ({
	options,
	onChangeTip,
	onChangeCustomTip,
	customTipPercentage,
	tipPercentage,
}: TipSelectProps) => {
	const currentPos = useRef(-1)
	const inputRefs = useRef<{ [key: number]: any }>({})

	inputRefs.current[options.length] = createRef()

	return (
		<div>
			<span id='select-tip' className='mb-2 block font-bold text-neutral-500'>
				Select Tip %
			</span>

			<div
				role='radiogroup'
				tabIndex={0}
				aria-labelledby='select-tip'
				className='grid grid-cols-2 gap-x-4 gap-y-4 focus:outline-offset-4 focus:outline-primary lg:grid-cols-3 lg:grid-rows-2'
				onKeyDown={(e) => {
					// Presed left arrow key.
					if (e.keyCode === Keys.ArrowLeft) {
						if (currentPos.current > 0) {
							currentPos.current -= 1

							const inputRef = inputRefs.current[currentPos.current]
							inputRef.current.focus()
						} else {
							e.preventDefault()
						}
					}

					// Pressed right arrow key.
					if (e.keyCode === Keys.ArrowRight) {
						if (currentPos.current <= options.length) {
							currentPos.current += 1

							const inputRef = inputRefs.current[currentPos.current]
							inputRef.current.focus()
						} else {
							e.preventDefault()
						}
					}
				}}
			>
				{options.map((percentage, index) => {
					const selected = customTipPercentage
						? false
						: tipPercentage === percentage

					if (!inputRefs.current[index]) {
						inputRefs.current[index] = createRef()
					}

					return (
						<TipPercentageButton
							ref={inputRefs.current[index]}
							key={percentage}
							percentage={percentage}
							selected={selected}
							onClick={() => {
								onChangeTip(percentage)
								onChangeCustomTip('')
							}}
						/>
					)
				})}

				<TipPercentageInput
					ref={inputRefs.current[options.length]}
					value={customTipPercentage}
					onChange={(e) => {
						onChangeTip(undefined)
						onChangeCustomTip(e.target.value)
					}}
				/>
			</div>
		</div>
	)
}

export default TipSelect
