class InventoryPage {

    get errorMsg() {
        return cy.get('[data-test="error"]')
    }

    isInventoryPage() {
        cy.url().should('include', 'inventory')
    }

    get cartButton() {
        return cy.get('#shopping_cart_container')
    }


}

export default new InventoryPage()