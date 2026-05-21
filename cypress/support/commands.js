// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (user) => {
    cy.visit('/')
    cy.get('#user-name').clear().type(user.username)
    cy.get('#password').clear().type(user.password)
    cy.get('#login-button').click()
})

Cypress.Commands.add('addProductsToCartFlaky', (products) => {
    products.forEach(product => {
        cy.log(product)
        cy.get('[data-test="inventory-list"]')
            .find('[data-test="inventory-item"]')
            .contains(product)
            .parent()
            .siblings('[class="pricebar"]')
            .find('button[name*="add-to-cart"]')
            .click()
    })
})

Cypress.Commands.add('addProductsToCartStable', (products) => {
    products.forEach((product) => {
        cy.contains('[data-test="inventory-item"]', product)
            .within(() => {
                cy.get('button[name*="add-to-cart"]').click()
            })
    })
})

Cypress.Commands.add('addMultipleProductsToCart', (count = 3) => {
    cy.get('[data-test="inventory-item"]')
        .each(($product, index) => {
            cy.log($product)
            if (index < count) {
                cy.wrap($product)
                    .find('button[name*="add-to-cart"]')
                    .click()
            }
        })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })