export default class TipCalculator {
	elements = {
		billInput: cy.get('#bill'),
		peopleInput: cy.get('#people'),
		customTipInput: cy.get("input[placeholder='Custom']"),
		resetButton: cy.get('button').contains('RESET'),
		tipAmountPerPerson: cy.get(':nth-child(1) > .text-primary'),
		totalPerPerson: cy.get(':nth-child(2) > .text-primary'),
	}

	fillForm = (props: {
		bill: string
		numberOfPeople: string
		tipPercentage: '10' | '60'
	}) => {
		this.elements.billInput.type(props.bill)

		if (props.tipPercentage === '10') {
			const tipSelector10 = cy.get('#tip-amount-10')
			tipSelector10.click()
		}

		if (props.tipPercentage === '60') {
			this.elements.customTipInput.type('60')
		}

		this.elements.peopleInput.type(props.numberOfPeople)

		// TODO: Adding a wait helped access values. Using timeouts does not work to delay access of values.
		cy.wait(1000)
	}

	isFormEmpty = () => {
		// TODO: Issue accessing elements using this keyword. Assertions always refer to the last accessed element, so some assertions are failaing.
		cy.wait(1000)

		this.elements.billInput.should('be.empty')
		this.elements.peopleInput.should('be.empty')
		this.elements.customTipInput.should('be.empty')
		this.elements.resetButton.should('be.disabled')
	}
}
