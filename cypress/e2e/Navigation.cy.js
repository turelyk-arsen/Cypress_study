describe('my suite', ()=> {
    it('navigation test', ()=> {
        cy.visit('...')
        cy.get('...').click() // go to the next page
        cy.get('...').should('have.text', 'your text') // something verifation

        // to go back
        cy.go('back') // go back to home page

        // go to another page
        cy.go('forward')

        // home page
        cy.go(-1)

        cy.go(1) // forward

        //reload page
        cy.reload()



    })
})