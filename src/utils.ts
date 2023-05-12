type Bill = string | undefined
type NumberOfPeople = string | undefined
type TipPercentage = string | number | undefined

const shouldCalculate = (
	bill: Bill,
	tipPercentage: TipPercentage,
	numberOfPeople: NumberOfPeople
) => {
	if (!bill || !numberOfPeople || !tipPercentage) {
		return 0
	}

	if (Number(numberOfPeople) === 0) {
		return 0
	}

	if (Number(bill) > 10000) {
		return 0
	}

	if (Number(numberOfPeople) < 0 || Number(bill) < 0) {
		return 0
	}

	return null
}

const calculateTipAmountPerPerson = (
	bill: Bill,
	tipPercentage: TipPercentage,
	numberOfPeople: NumberOfPeople
) => {
	const value = shouldCalculate(bill, tipPercentage, numberOfPeople)
	if (value !== null) {
		return value
	}

	return (Number(bill) * (Number(tipPercentage) / 100)) / Number(numberOfPeople)
}

const calculateTotalPerPerson = (
	bill: Bill,
	tipPercentage: TipPercentage,
	numberOfPeople: NumberOfPeople
) => {
	const value = shouldCalculate(bill, tipPercentage, numberOfPeople)
	if (value !== null) {
		return value
	}

	return (
		(Number(bill) * (Number(tipPercentage) / 100 + 1)) / Number(numberOfPeople)
	)
}

export default {
	calculateTotalPerPerson,
	calculateTipAmountPerPerson,
}
