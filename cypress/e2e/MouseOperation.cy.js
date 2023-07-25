require ('@4tw/cypress-drag-drop')

describe('Mouse Operation', () => {
    it.skip('mouse hover', () => {
        cy.visit('https://demo.opencart.com/')
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible')
    })

    it.skip('right click', ()=> {
        cy.visit('...')

        //Approach 1
        cy.get('...').trigger('contextmenu')
        cy.get('...').should('be.visible')

        //Approach 2
        cy.get('...').rightclick();
    })

    it.skip('double click', ()=> {
        cy.visit('')
        // cy.frameLoaded('...') must install PLUGIN

        //Approach 1
        // cy.iframe('...').find('...').trigger('dblclick)
        // cy.iframe('...').find('...').should('have.value','hello world')

        // Approach 2
        // cy.iframe('...').find('...').dblclick()
        // cy.iframe('...').find('...').should('have.value','hello world')
    })

    it.skip('drag and drop using plugin = npm install --save-dev @4tw/cypress-drag-drop', ()=> {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').drag('#box106', {force: true})
    })

    it('scrolling page', ()=> {
        cy.visit('https://www.worldometers.info/geography/flags-of-the-world/')
        cy.get(':nth-child(127)').scrollIntoView({duration:2000})
        cy.get(':nth-child(127)').should('be.visible')
    })
})