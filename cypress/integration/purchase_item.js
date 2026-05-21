import User from '../fixtures/users'
import Products from '../fixtures/products'
import MainPage from '../pom/main_page'

const USER = User.standard_user

describe('Buy Products', () => {
    beforeEach(() => {
        cy.log('GIVEN a User is signed in')
        cy.login(USER)
    })

    it('Login HP', () => {
        cy.log('WHEN the User adds products in the cart')
        // cy.addProductsToCartFlaky(Products)
        // cy.addProductsToCartStable(Products)
        cy.addMultipleProductsToCart(Products.length)
        cy.log('AND the products are added')
        MainPage.cartIcon.scrollIntoView().should('have.text', Products.length)
        // ... finish the happy path scenario using the same logic


    })

})