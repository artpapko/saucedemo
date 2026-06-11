import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'
import InventoryPage from '../pom/inventory_page'
import CartPage from '../pom/cart_page'


describe('performanceglitchuserlogin', () => {

const USER = User.performance_glitch_user,
      PRODUCT_NAME = 'Sauce Labs Backpack'

beforeEach(() => {
    cy.log('WHEN Performance Glitch User tries to login')
    LoginPage.login(USER)
  })

  it('performanceglitchusercheckout', () => {
    cy.log('WHEN User adds a product to the Cart')
    cy.get('[id="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.log('AND User clicks the Cart')
    InventoryPage.cartButton.click()
    cy.log('THEN the Cart page is opened')
    CartPage.isCartPage()
    cy.log('AND User clicks the [Checkout] button')
    CartPage.checkoutButton.click()
    cy.log('THEN the Checkout: Your Information page is opened')
    cy.log('AND User types the First Name')
    cy.log('AND User types the Last Name')
    cy.log('AND First Name is Overwritten with letter "e"')
    CheckoutStepOnePageProblemUser.fillInCheckoutForm(USER)
    })
})