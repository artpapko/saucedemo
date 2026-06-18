import User from '../fixtures/users'
import Products from '../fixtures/products'
import InventoryPage from '../pom/main_page'
import CartPage from '../pom/cart_page'
import { calculateTotalPrice } from '../support/utils'

const USER = User.standard_user

describe('Buy Products', () => {
    beforeEach(() => {
        cy.log('GIVEN a User is signed in')
        cy.login(USER)
    })

    it('Buy Products HP', () => {
        cy.log('WHEN the User adds products in the cart')
        cy.addProductsToCartStable(Products)
        cy.getProductPrices(Products).then((prices) => {
            const TOTAL_PRICE = calculateTotalPrice(prices, USER.tax)
            cy.log('THEN the products are added')
            InventoryPage.cartIcon.scrollIntoView().should('have.text', Products.length).click()
            cy.checkNumberOfProducts(Products.length)
            cy.log('AND WHEN the User checks out the purchase')
            CartPage.checkoutButton.click()
            cy.fillInCheckoutForm(USER)
            CartPage.continueButton.click()
            cy.log('THEN the the Total price is correct')
            cy.log(TOTAL_PRICE)
            CartPage.totalPrice.scrollIntoView().should('contain.text', TOTAL_PRICE)
        })
    })
})