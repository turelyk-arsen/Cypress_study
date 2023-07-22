describe('assertion', () => {
    it('Implicit assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //should and
        // cy.url().should('include', 'orangehrmlive.com')
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain', 'orangehrmlive.com')

        // cy.url().should('include', 'orangehrmlive.com')
        // .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain', 'orangehrmlive.com')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrmlive.com')
        .and('not.contain', 'orangehrmlive.com1')

        cy.title().should('include', 'Orange')
        .and('eq','OrangeHRM')
        .and('contain', 'OrangeHRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible') // logo is visible
        // cy.get('.orangehrm-login-branding > img').should('exist')
        .and('exist')  // logo exist 

        cy.get('a').should('have.length', '5')  //number of links

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.attr', 'placeholder', 'Username')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        .should('have.value', 'Admin')
    })

    it('Explicit assertion', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.get('.oxd-button').click()

        let expName = 'Paul Collings'

        cy.get('.oxd-userdropdown-name').then((x) => {
            let actName = x.text()

            //BDD style
            expect(actName).to.equal(expName)
            // expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName, expName)
            // assert.notEqual(actName, expName)
        })
    })
})