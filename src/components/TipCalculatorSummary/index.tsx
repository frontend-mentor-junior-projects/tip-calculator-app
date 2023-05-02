type TipCalculatorSummaryProps = {
	label: string
	value: number
}

const TipCalculatorSummary = ({ label, value }: TipCalculatorSummaryProps) => {
	return (
		<div className='mb-4 flex flex-row items-center justify-between font-bold'>
			<div>
				<p className='text-white'>{label}</p>
				<p className='text-neutral-200'>/ person</p>
			</div>

			<p className='text-[24px] text-primary lg:text-[48px]'>
				${value.toFixed(2)}
			</p>
		</div>
	)
}

export default TipCalculatorSummary
