class CheckoutCompletePage {

        get completeHeader() {
                return cy.get('[data-test = "complete-header"]')
        }

        isCheckoutCompletePage() {
                cy.url().should("contain", "checkout-complete")
        }
}

export default new CheckoutCompletePage()