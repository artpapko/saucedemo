class CheckoutPage {

    get continueButton() {
        return cy.get('input[data-test="continue"]')
    }

    get totalPrice() {
        return cy.get('[data-test="total-label"]')
    }

    get finishButton() {
        return cy.get('[data-test="finish"]')
    }


    get checkoutText() {
        return cy.get('[data-test="complete-text"]')
    }

    get checkoutText() {
        return cy.get('[data-test="complete-text"]')
    }

    get backHomeButton() {
        return cy.get('[data-test="back-to-products"]')
    }

}

export default new CheckoutPage()