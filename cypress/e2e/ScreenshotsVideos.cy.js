describe('my suite', ()=> {
    it('screenshots & video', ()=> {
        cy.visit('https://demo.opencart.com/')
        // cy.wait(5000)
        // cy.screenshot('homepage')

        // cy.get('#logo > a > .img-fluid').screenshot('logo')

        // automatically screenshots & video on failure - only CLI
        cy.get(':nth-child(7) > .nav-link').click() // go to cameras 
        cy.get('h2').should('have.text', 'Tablets') // fail
        // npx cypress run   --- all your files
        // npx cypress run --spec and adress

    })
})