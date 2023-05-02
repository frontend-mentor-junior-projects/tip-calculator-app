import TipCalculatorApp from '../pages/TipCalculator'

type Form = { bill: string; numberOfPeople: string; tipPercentage: '10' | '60' }

const FORM_WITH_BASIC_TIP: Form = {
	bill: '400',
	numberOfPeople: '2',
	tipPercentage: '10',
}

const FORM_WITH_CUSTOM_TIP: Form = {
	bill: '400',
	numberOfPeople: '2',
	tipPercentage: '60',
}

describe('Tip Calculator', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	afterEach(() => {
		cy.wait(1000)
	})

	it('should visit page', () => {
		const TipCalculator = new TipCalculatorApp()

		TipCalculator.isFormEmpty()
	})

	it('should calculate for $400, 10% tip, 2 people', () => {
		const TipCalculator = new TipCalculatorApp()

		TipCalculator.fillForm(FORM_WITH_BASIC_TIP)

		TipCalculator.elements.tipAmountPerPerson.should('have.text', '$20.00')
		TipCalculator.elements.totalPerPerson.should('have.text', '$220.00')

		TipCalculator.elements.resetButton.should('be.enabled')
	})

	it('should calculate for $400, 60% tip, 2 people', () => {
		const TipCalculator = new TipCalculatorApp()

		TipCalculator.fillForm(FORM_WITH_CUSTOM_TIP)

		TipCalculator.elements.tipAmountPerPerson.should('have.text', '$120.00')
		TipCalculator.elements.totalPerPerson.should('have.text', '$320.00')

		TipCalculator.elements.resetButton.should('be.enabled')
	})

	it('should not calculate if number of people is 0', () => {
		const TipCalculator = new TipCalculatorApp()

		TipCalculator.fillForm({ ...FORM_WITH_BASIC_TIP, numberOfPeople: '0' })

		TipCalculator.elements.tipAmountPerPerson.should('have.text', '$0.00')
		TipCalculator.elements.totalPerPerson.should('have.text', '$0.00')

		const errorMessage = cy.get('p').contains("Can't be zero")
		errorMessage.should('exist')
	})

	it('should not calculate if bill is larger than 10000', () => {
		const TipCalculator = new TipCalculatorApp()

		TipCalculator.fillForm({ ...FORM_WITH_BASIC_TIP, bill: '10001' })

		TipCalculator.elements.tipAmountPerPerson.should('have.text', '$0.00')
		TipCalculator.elements.totalPerPerson.should('have.text', '$0.00')

		const errorMessage = cy.get('p').contains('Maximum number')
		errorMessage.should('exist')
	})

	it('should reset form', () => {
		const TipCalculator = new TipCalculatorApp()

		TipCalculator.fillForm(FORM_WITH_BASIC_TIP)

		TipCalculator.elements.resetButton.should('be.enabled')
		TipCalculator.elements.resetButton.click()

		TipCalculator.elements.resetButton.should('be.disabled')
		TipCalculator.isFormEmpty()
	})
})
