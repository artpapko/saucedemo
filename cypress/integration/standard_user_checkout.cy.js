import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'
import InventoryPage from '../pom/inventory_page'
import CartPage from '../pom/cart_page'
import CheckoutStepOnePage from '../pom/checkout_step_one_page'
import CheckoutStepTwoPage from '../pom/checkout_step_two_page'
import CheckoutCompletePage from '../pom/checkout_complete_page'



describe('standardusercheckout', () => {

  const USER = User.standard_user,
        PRODUCT_NAME = 'Sauce Labs Backpack',
        HP_MSG = 'Thank you for your order!'


  beforeEach(() => {
    cy.log('WHEN Standard User tries to login')
    LoginPage.login(USER)
  })

  it('standardusercheckout', () => {
    cy.log('WHEN User adds a product to the Cart')
    cy.get('[id="add-to-cart-sauce-labs-backpack"]').click()
    cy.log('AND User clicks the Cart')
    InventoryPage.cartButton.click()
    cy.log('THEN the Cart page is opened')
    CartPage.isCartPage()
    cy.log('AND User clicks the [Checkout] button')
    CartPage.checkoutButton.click()
    cy.log('THEN the Checkout: Your Information page is opened')
    CheckoutStepOnePage.fillInCheckoutForm(USER)
    cy.log('THEN the Checkout is displayed with the correct information')
    CheckoutStepTwoPage.inventoryItemName.should('contain.text', PRODUCT_NAME)
    cy.log('AND User clicks the [Finish] button')
    CheckoutStepTwoPage.finishButton.click()
    cy.log('THEN the Checkout: Complete! page is opened')
    CheckoutCompletePage.isCheckoutCompletePage()
    cy.log('AND the Thank You message is displayed')
    CheckoutCompletePage.completeHeader.should('contain.text', HP_MSG)
  })
})
