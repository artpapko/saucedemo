import User from '../fixtures/users'
import Products from '../fixtures/products'
import InventoryPage from '../pom/main_page'
import CartPage from '../pom/cart_page'
import CheckoutPage from '../pom/checkout_page'
import { calculateTotalPrice } from '../support/utils'

const USER = User.standard_user,
    HP_MSG = 'Your order has been dispatched'


describe('Buy Products', () => {
    beforeEach(() => {
        cy.log('GIVEN a User is signed in')
        cy.login(USER)
    })

    it('Buy Products HP', () => {
        cy.log('WHEN the User adds products in the cart')
        cy.addProductsToCart(Products)
        cy.getProductPrices(Products).then((prices) => {
            const TOTAL_PRICE = calculateTotalPrice(prices, USER.tax)
            cy.log('THEN the products are added')
            InventoryPage.cartIcon.scrollIntoView().should('have.text', Products.length).click()
            cy.checkNumberOfProducts(Products.length)
            cy.log('AND WHEN the User checks out the purchase')
            CartPage.checkoutButton.click()
            cy.fillInCheckoutForm(USER)
            CheckoutPage.continueButton.click()
            cy.log('THEN the the Total price is correct')
            CheckoutPage.totalPrice.scrollIntoView().should('contain.text', TOTAL_PRICE)
        })

        cy.log('AND WHEN the User click [Finish]')
        CheckoutPage.finishButton.click()

        cy.log('THEN the HP MSG is displayed')
        // CheckoutPage.checkoutText.should('contain.text', HP_MSG)
        CheckoutPage.checkoutText.shouldHaveNormalizedText(HP_MSG)
        cy.log('AND the User can return to the Main Page')
        CheckoutPage.backHomeButton.click()
        InventoryPage.isMainPage()
    })
})