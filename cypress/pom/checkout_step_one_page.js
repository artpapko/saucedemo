class CheckoutStepOnePage {


        get firstNameInput() {
                return cy.get('[id="first-name"]')
        }
        
        get lastNameInput() {
                return cy.get('[id="last-name"]')
        }

        get postalCodeInput() {
                return cy.get('[id="postal-code"]')
        }

        get continueButton() {
                return cy.get('[id="continue"]')
        }

        fillInCheckoutForm(user) {
                this.firstNameInput.clear().type(user.first_name)
                this.lastNameInput.clear().type(user.last_name)
                this.postalCodeInput.clear().type(user.postal_code)
                this.continueButton.click()
        }
}


export default new CheckoutStepOnePage()