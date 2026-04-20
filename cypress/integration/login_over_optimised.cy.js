import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'
import MainPage from '../pom/main_page'

const ERR_MSG = 'Epic sadface: Sorry, this user has been locked out.'

describe('Login', () => {
    Object.values(User).forEach(user => {
        it(`Login ${user.path}`, () => {
            cy.log(user)
            cy.log('WHEN User goes to the Login Page')
            LoginPage.open()
            cy.log('And input username')
            LoginPage.usernameInputField.clear().type(user.username)
            cy.log('And input password')
            LoginPage.passwordInputField.clear().type(user.password)
            cy.log('And hit [Login]')
            LoginPage.loginButton.click()
            if (user.path == 'HP') {
                cy.log('Then the Main Page is opened')
                MainPage.isMainPage()
            } else {
                cy.log('Then the error msg is shown')
                MainPage.errorMsg.should('contain.text', ERR_MSG)
            }
        })
    })
})