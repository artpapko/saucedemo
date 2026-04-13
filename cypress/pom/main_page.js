class MainPage {

    get errorMsg() {
        return cy.get('[data-test="error"]')
    }

    isMainPage() {
        cy.url().should('include', 'inventory')
    }

}

export default new MainPage()