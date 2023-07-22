describe('CSSLocators', ()=> {
    it('css locators', ()=> {
        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('[for="couponCode1"]').contains('Coupon Code')
        cy.get('#couponCode1').type('type')
        cy.get('[type="submit"]').click()
 

        // cy.get('[href="/news/0"]').contains('Новое видео MAGNOLIA PARK')
        // cy.get('input#search-band').type('Accept') // id tag is optional
        // cy.get('[type="submit"]').click() //class
        // cy.get('[href="/mp3/band-4"]').contains('Accept') // attribute
    })

} )