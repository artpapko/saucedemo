class MainPage {

    get errorMsg() {
        return cy.get('[data-test="error"]')
    }

    get cartIcon() {
        return cy.get('[data-test="shopping-cart-link"]')
    }

    isMainPage() {
        cy.url().should('include', 'inventory')
    }

}

export default new MainPage()