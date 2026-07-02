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

Cypress.Commands.add('addProductsToCart', (products) => {
    products.forEach((product) => {
        cy.contains('[data-test="inventory-item"]', product)
            .within(() => {
                cy.get('button[name*="add-to-cart"]').click()
            })
    })
})

Cypress.Commands.add('getProductPrices', (products) => {
    const prices = []

    return cy.wrap(products).each((product) => {
        cy.contains('[data-test="inventory-item"]', product)
            .within(() => {
                cy.get('[data-test="inventory-item-price"]')
                    .invoke('text')
                    .then((text) => {
                        const price = Number(
                            text.replace('$', '').trim()
                        )

                        prices.push(price)
                    })
            })
    }).then(() => {
        return prices
    })
})

Cypress.Commands.add('checkNumberOfProducts', count => {
    // cy.wait(5000)
    cy.get('[data-test="inventory-item"]').should('have.length', count)
})

Cypress.Commands.add('fillInCheckoutForm', user => {
    // cy.wait(5000)
    cy.get('[data-test="firstName"]').clear().type(user.first_name)
    cy.get('[data-test="lastName"]').clear().type(user.last_name)
    cy.get('[data-test="postalCode"]').clear().type(user.postal_code)
})

Cypress.Commands.add(
    'shouldHaveNormalizedText',
    { prevSubject: true },
    (subject, expectedText) => {
        const normalize = (value) =>
            value
                .trim()
                .replace(/\s+/g, ' ')
                .replace(/[.,]/g, '')
                .toLowerCase()

        cy.wrap(subject)
            .invoke('text')
            .then((text) => {
                expect(normalize(text)).to.include(normalize(expectedText))
            })
    }
)

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