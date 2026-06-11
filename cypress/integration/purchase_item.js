import User from '../fixtures/users'
import Products from '../fixtures/products'
import InventoryPage from '../pom/main_page'
import CartPage from '../pom/cart_page'
import { calculateTotalPrice } from '../support/utils'

const USER = User.standard_user
const USER_2 = User.standard_user_2
const USERS = [USER, USER_2, USER, USER_2]

describe('Buy Products', () => {
    USERS.forEach(user => {

        beforeEach(() => {
            cy.log('GIVEN a User is signed in')
            cy.login(user)
        })
        
        it(`Buy Products HP ${user.last_name}`, () => {
            cy.log(user.last_name)
            cy.log('WHEN the User adds products in the cart')
            // cy.addProductsToCartFlaky(Products)
            // cy.addMultipleProductsToCart(Products.length)
            cy.addProductsToCartStable(Products)
            cy.getProductPrices(Products).then((prices) => {
                const TOTAL_PRICE = calculateTotalPrice(prices, user.tax)
                
                cy.log('THEN the products are added')
                InventoryPage.cartIcon.scrollIntoView().should('have.text', Products.length).click()
                cy.checkNumberOfProducts(Products.length)
                cy.log('AND WHEN the User checks out the purchase')
                CartPage.checkoutButton.click()
                cy.fillInCheckoutForm(user)
                CartPage.continueButton.click()
                cy.log('THEN the the Total price is correct')
                cy.log(TOTAL_PRICE)
                CartPage.totalPrice.scrollIntoView().should('contain.text', TOTAL_PRICE)
            })
        })
    })
})