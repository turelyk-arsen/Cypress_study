// import Login from "../PageObjectFolder/LoginPage"
import Login from "../PageObjectFolder/LoginPage2"

describe('pom', ()=> {

    // general approach
    it('Explicit assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()
    })

    // using POM
    it('Explicit assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPasswordName("admin123")
        ln.clickSubmit()
        ln.verifyLogin()

    })

    // using POM with fixture
    it.only('Explicit assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.fixture("orangehrm").then((data)=> {
        const ln = new Login()
        ln.setUserName(data.username)
        ln.setPasswordName(data.password)
        ln.clickSubmit()
        ln.verifyLogin()   
        })



    })
})
