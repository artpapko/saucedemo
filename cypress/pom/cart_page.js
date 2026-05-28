class CartPage {

    get checkoutButton() {
        return cy.get('button[data-test="checkout"]')
    }

    get continueButton() {
        return cy.get('input[data-test="continue"]')
    }

    get totalPrice() {
        return cy.get('[data-test="total-label"]')
    }


}

export default new CartPage()