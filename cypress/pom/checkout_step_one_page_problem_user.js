class CheckoutStepOnePageProblemUser {


        get firstNameInput() {
                return cy.get('[id="first-name"]')
        }
        
        get lastNameInput() {
                return cy.get('[id="last-name"]')
        }


        fillInCheckoutForm(user) {
                this.firstNameInput.clear().type(user.first_name)
                this.lastNameInput.clear().type(user.last_name)
                this.firstNameInput.should('have.value', user.expected_error)  // e overwrite
        }
}


export default new CheckoutStepOnePageProblemUser()