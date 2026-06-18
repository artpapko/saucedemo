import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'
import InventoryPage from '../pom/inventory_page'
import CartPage from '../pom/cart_page'
import CheckoutStepOnePage from '../pom/checkout_step_one_page'


describe('errorusercheckout', () => {

const USER = User.error_user,
      PRODUCT_NAME = 'Sauce Labs Bike Light'

beforeEach(() => {
    cy.log('WHEN Error User tries to login')
    LoginPage.login(USER)
  })

  it('errorusercheckout', () => {
    cy.log('WHEN User adds a product to the Cart')
    cy.get('[id="add-to-cart-sauce-labs-bike-light"]').click()
    cy.log('AND User clicks the Cart')
    InventoryPage.cartButton.click()
    cy.log('THEN the Cart page is opened')
    CartPage.isCartPage()
    cy.log('AND User clicks the [Checkout] button')
    CartPage.checkoutButton.click()
    cy.log('THEN the Checkout: Your Information page is opened')
    cy.log('AND User types the Last Name')
    cy.log('AND User cannot type Last Name')
    CheckoutStepOnePage.lastNameInput.clear().type(USER.last_name)
    CheckoutStepOnePage.lastNameInput.should('have.attr', 'value', '')
    })
})