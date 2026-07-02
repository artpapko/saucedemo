class CartPage {

    get checkoutButton() {
        return cy.get('button[data-test="checkout"]')
    }

}

export default new CartPage()