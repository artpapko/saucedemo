class CheckoutStepTwoPage {


        get inventoryItemName() {
                return cy.get('[data-test="inventory-item-name"]')
        }
        get finishButton() {
                return cy.get('[id="finish"]')
        }


}


export default new CheckoutStepTwoPage()