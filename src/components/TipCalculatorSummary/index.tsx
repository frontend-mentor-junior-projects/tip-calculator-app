type TipCalculatorSummaryProps = {
	label: string
	value: number
}

const TipCalculatorSummary = ({ label, value }: TipCalculatorSummaryProps) => {
	return (
		<div className='mb-4 flex flex-row items-center justify-between font-bold'>
			<div>
				<span className='block text-white'>{label}</span>
				<span className='block text-neutral-200'>/ person</span>
			</div>

			<span className='text-[24px] text-primary lg:text-[48px]'>
				${value.toFixed(2)}
			</span>
		</div>
	)
}

export default TipCalculatorSummary
