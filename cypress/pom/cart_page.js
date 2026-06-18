class CartPage {

        get checkoutButton() {
                return cy.get('[id="checkout"]')
        }

        isCartPage() {
                cy.url().should("contain", "cart")
        }
}

export default new CartPage()