import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'
import InventoryPage from '../pom/inventory_page'

const USER = User.standard_user,
    USER_SD = User.locked_out_user,
    USER_PB = User.problem_user,
    USER_PERF = User.performance_glitch_user,
    USER_ERR = User.error_user,
    USER_VIS = User.visual_user,
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
        InventoryPage.isInventoryPage()
    })

    it('Login SD', () => {
        cy.log('WHEN Locked User tries to login')
        LoginPage.login(USER_SD)
        cy.log('Then the error msg is shown')
        InventoryPage.errorMsg.should('contain.text', ERR_MSG)
    })

    it('Login PB', () => { 
        cy.log('WHEN Problem User tries to login')
        LoginPage.login(USER_PB)
        cy.log('Then the Main Page is opened')
        InventoryPage.isInventoryPage()
    })

    it('Login PERF', () => {
        cy.log('WHEN Performance Glitch User tries to login')
        LoginPage.login(USER_PERF)
        cy.log('Then the Main Page is opened')
        InventoryPage.isInventoryPage()
    })

    it('Login ERR', () => {
        cy.log('WHEN Error User tries to login')
        LoginPage.login(USER_ERR)
        cy.log('Then the Main Page is opened')
        InventoryPage.isInventoryPage()
    })

    it('Login VIS', () => {
        cy.log('WHEN Visual User tries to login')
        LoginPage.login(USER_VIS)
        cy.log('Then the Main Page is opened')
        InventoryPage.isInventoryPage()
    })
})