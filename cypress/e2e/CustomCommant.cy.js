describe('Custom command', ()=> {

    it('handling links', ()=> {
        cy.visit('https://demo.nopcommerce.com/')

        //direct - without using custom command
        // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click()
        cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch')
    })

    // it.only('overwriting existing command', ()=> {
    //     cy.visit('https://demo.nopcommerce.com/')

    //     cy.clickLink('ApplE MacBook Pro 13-inch')
    //     cy.get('h1').should('have.text', 'Apple MacBook Pro 13-inch')
    // })

    it('login command', ()=> {
        cy.visit('https://demo.nopcommerce.com/')
        // login
        cy.clickLink('Log in')
        cy.loginapp('testing@gmail','test123')
        //search
    })
})