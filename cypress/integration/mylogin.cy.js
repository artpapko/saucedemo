describe('Login', ()=> {
    it('Login HP', ()=> {
        cy.visit('')
        cy.get('#user-name').clear().type('standard_user')
        cy.get('#password').clear().type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', 'inventory')
    })
})