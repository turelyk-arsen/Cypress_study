describe("Handle dropdowns", () => {

//   it("Dropdown with select", () => {
//     cy.visit('https://www.zoho.com/commerce/free-demo.html')
//     cy.get('#zcf_address_country').select('Japan').should('have.value', 'Japan')
//   });

//   it("Dropdown without select", () => {
//     cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

//     cy.get('#select2-billing_country-container').click()
//     cy.get('.select2-search__field').type('Italy').type('{enter}')
//     cy.get('#select2-billing_country-container').should('have.text', 'Italy')
//     // cy.get('#select2-billing_country-container').should('contain', 'Italy')
//   });

// it("Auto suggest dropdown", () => {
//         cy.visit('https://www.wikipedia.org/')
//         cy.get('#searchInput').type('Delhi')
//         cy.get('.suggestion-title').contains('Delhi University').click()
//         // cy.get('.pure-button').click()

//       });

it("Dynamic dropdown", () => {
    cy.visit('https://www.google.com/')
    cy.get('[name="q"]').type('cypress automation')

    cy.wait(5000)

    cy.get('.wM6W7d').should('have.length', '12')

    cy.get('.wM6W7d').each(($el, index, $list) => {
        if($el.text() == 'cypress automation tool') {
            cy.wrap($el).click()
        }
    })
    cy.get('[name="q"]').should('have.value', 'cypress automation tool')

  });

});
