describe('My first test', ()=> {
    it('verify title positive', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
    })
    it('verify title negative', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM1')
    })
    // testSuite --> testCase --> testStep
    // spec file(cy.js) --> describe block(testSuite) --> it blocks (test)
})

