import { useState } from 'react'

import { Button, Input, TipCalculatorSummary, TipSelector } from 'components'
import { TipPercentages } from 'components/TipSelector'
import utils from 'utils'

function App() {
	const TIP_PERCENTAGES: TipPercentages[] = [5, 10, 15, 25, 50]

	const [bill, setBill] = useState<string | undefined>('')
	const [numberOfPeople, setNumberOfPeople] = useState<string | undefined>('')

	const [tipPercentage, setTipPercentage] = useState<number | undefined>(0)
	const [customTipPercentage, setCustomTipPercentage] = useState<
		string | undefined
	>('')

	const isResetButtonEnabled = !!(
		bill ||
		numberOfPeople ||
		tipPercentage ||
		customTipPercentage
	)

	const resetForm = () => {
		setBill('')
		setNumberOfPeople('')
		setCustomTipPercentage('')
		setTipPercentage(undefined)
	}

	return (
		<main className='flex min-h-screen flex-col items-center justify-center bg-neutral-200'>
			<h1 className='mb-10 mt-12 text-[24px] text-neutral-500 lg:mb-[88px]'>
				SPLI
				<br />
				TTER
			</h1>

			<section className='flex min-w-[375px] flex-col rounded-3xl rounded-b-none bg-white p-8 sm:pl-12 lg:mb-12 lg:grid lg:h-[480px] lg:w-[928px] lg:grid-cols-2 lg:gap-x-12 lg:rounded-b-3xl'>
				<div className='flex flex-col space-y-8 py-4 lg:justify-between'>
					<Input
						type='bill'
						label='Bill'
						value={bill}
						onChange={(event) => {
							setBill(event.target.value)
						}}
					/>

					<div>
						<p className='mb-4 text-neutral-500'>Select Tip %</p>
						<div className='grid grid-cols-2 gap-x-4 gap-y-4 lg:grid-cols-3 lg:grid-rows-2'>
							{TIP_PERCENTAGES.map((percentage) => {
								const selected = customTipPercentage
									? false
									: tipPercentage === percentage

								return (
									<TipSelector
										key={percentage}
										percentage={percentage}
										selected={selected}
										onClick={() => {
											setTipPercentage(percentage)
											setCustomTipPercentage('')
										}}
									/>
								)
							})}
							<TipSelector
								custom
								value={customTipPercentage}
								onChange={(event) => {
									setTipPercentage(undefined)
									setCustomTipPercentage(event.target.value)
								}}
							/>
						</div>
					</div>

					<Input
						type='people'
						label='Number of People'
						value={numberOfPeople}
						onChange={(event) => {
							setNumberOfPeople(event.target.value)
						}}
					/>
				</div>

				<div className='mt-8 flex flex-col justify-between rounded-2xl bg-neutral-500 p-6 pt-12 lg:mt-0 lg:p-10 lg:pb-10'>
					<div className='mb-8 lg:mb-0'>
						<TipCalculatorSummary
							label='Tip Amount'
							value={utils.calculateTipAmountPerPerson(
								bill,
								tipPercentage || customTipPercentage,
								numberOfPeople
							)}
						/>

						<TipCalculatorSummary
							label='Total'
							value={utils.calculateTotalPerPerson(
								bill,
								tipPercentage || customTipPercentage,
								numberOfPeople
							)}
						/>
					</div>

					<Button
						disabled={!isResetButtonEnabled}
						onClick={() => {
							resetForm()
						}}
					>
						Reset
					</Button>
				</div>
			</section>
		</main>
	)
}

export default App
