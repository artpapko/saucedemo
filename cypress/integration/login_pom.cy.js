import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'
import MainPage from '../pom/main_page'

const USER = User.standard_user,
    USER_SD = User.locked_out_user,
    ERR_MSG = 'Epic sadface: Sorry, this user has been locked out.'

describe('Login', () => {
    it('Login HP', () => {
        cy.log('WHEN User goes to the Login Page')
        LoginPage.open()
        cy.log('And input username')
        LoginPage.usernameInputField.clear().type(USER.username)
        cy.log('And input password')
        LoginPage.passwordInputField.clear().type(USER.password)
        cy.log('And hit [Login]')
        LoginPage.loginButton.click()
        cy.log('Then the Main Page is opened')
        MainPage.isMainPage()
    })

    it('Login SD', () => {
        cy.log('WHEN Locked User tries to login')
        LoginPage.login(USER_SD)
        cy.log('Then the error msg is shown')
        MainPage.errorMsg.should('contain.text', ERR_MSG)
    })
})