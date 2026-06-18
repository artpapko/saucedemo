import User from '../fixtures/users.json'
import LoginPage from '../pom/login_page'


describe('lockedoutuserlogin', () => {

const USER = User.locked_out_user,
      ERR_MSG = USER.err_msg

beforeEach(() => {
    cy.log('WHEN Locked Out User tries to login')
    LoginPage.login(USER)
  })

  it('lockedoutuserlogin HP', () => {
    cy.log('WHEN Locked Out User tries to login')
    cy.log('THEN the Locked Out User is shown an error message')
    cy.get('[data-test="error"]').should('contain.text', ERR_MSG)
  })
})
