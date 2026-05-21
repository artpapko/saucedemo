describe('problemusercheckout', () => {

const USER = User.problem_user


  it('problemusercheckout', () => {
    cy.log('WHEN Problem User tries to login')
    cy.visit('https://www.saucedemo.com')
    cy.log('AND types the username')
    cy.get('[id="user-name"]').type("problem_user")
    cy.log('AND types the password')
    cy.get('[id="password"]').type("secret_sauce")
    cy.log('AND clicks the [Login] button')
    cy.get('[id="login-button"]').click()
    cy.log('THEN the Main page is opened.')
    cy.url().should("contain","inventory")
    cy.log('AND User clicks the Shopping Cart')
    cy.get('[id="shopping_cart_container"]').click()
    cy.log('THEN the Shopping Cart page is opened')
    cy.url().should("contain","cart")
    cy.log('AND User clicks the [Checkout] button')
    cy.get('[id="checkout"]').click()
    cy.log('THEN the Checkout: Your Information page is opened')
    cy.url().should("contain","checkout-step-one")
    cy.log('AND User types the First Name')
    cy.get('[id="first-name"]').type("Veronica")
    cy.log('AND User types the Last Name')
    cy.get('[id="last-name"]').type("Smith")
    cy.log('AND First Name is Overwritten with Last Name')
    cy.get('[id="first-name"]').clear().type("Smith")
    })
})