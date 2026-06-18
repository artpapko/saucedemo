// checkout_step_one_page_buggy_users.js
class CheckoutStepOneBuggyUsers {
    get firstNameInput() { return cy.get('[id="first-name"]') }
    get lastNameInput() { return cy.get('[id="last-name"]') }

   // For problem_user only
verifyProblemUserCannotTypeLastName(user) {
    cy.log('AND User types the First Name')
    this.firstNameInput.clear().type(user.first_name)
    this.firstNameInput.should('have.value', 'e')  // e overwrite
    
    cy.log('AND User attempts Last Name - but cannot type it')
    this.lastNameInput.clear().type(user.last_name)
    this.lastNameInput.should('have.value', '')
}

// For error_user - without the 'e' assertion
verifyErrorUserCannotTypeLastName(user) {
    cy.log('AND User types the First Name')
    this.firstNameInput.clear().type(user.first_name)
    this.firstNameInput.should('have.value', user.first_name)
    
    cy.log('AND User attempts Last Name - but cannot type it')
    this.lastNameInput.clear().type(user.last_name)
    this.lastNameInput.should('have.value', '')
}

    // Add other methods for glitch_user issues here
    verifyGlitchBehavior(user) { 
        cy.log('Implement checks for performance_glitch_user issues, e.g. slow loading')
    }
}

export default new CheckoutStepOneBuggyUsers()