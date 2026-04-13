class LoginPage {

    open() {
        cy.visit('')
    }

    get usernameInputField() {
        return cy.get('#user-name')
    }

    get passwordInputField() {
        return cy.get('#password')
    }

    get loginButton() {
        return cy.get('#login-button')
    }

    login(user) {
        this.open()
        this.usernameInputField.clear().type(user.username)
        this.passwordInputField.clear().type(user.password)
        this.loginButton.click()
    }

    isLoginPage() {
        cy.url().should('include', 'inventory')
    }

}

export default new LoginPage()