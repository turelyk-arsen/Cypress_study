describe('Check UI Elements', () => {
    it('Checking radio button', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //visibility
        cy.get('#female').should('be.visible')
        cy.get('#male').should('be.visible')

        //selecting radio button
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')

        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')
        

    })

    it('Checking check boxes', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')

        //visibility
        cy.get('#monday').should('be.visible')
        //selecting radio button
        cy.get('#monday').check().should('be.checked')
        //unselecting
        cy.get('#monday').uncheck().should('not.be.checked')

        //ALL selecting
        cy.get('input.form-check-input[type="checkbox"]').check().should('be.checked')
        cy.get('input.form-check-input[type="checkbox"]').uncheck().should('not.be.checked')

        // select first 
        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')

        // select last
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')

    })
})