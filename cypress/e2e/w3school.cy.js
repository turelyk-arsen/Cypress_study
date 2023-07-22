describe('CSSLocators', ()=> {
    it('css locators', ()=> {
// cy.visit('https://www.w3schools.com/');
// cy.get('#search2').click();
// cy.get('#search2').type('html');
// cy.get('#learntocode_searchbtn').click();
// cy.url().should('contains', 'https://www.w3schools.com/html/default.asp');
// cy.url().should('contains', 'https://widget.fr3.eu.criteo.com/dis/dis.aspx');
// cy.url().should('contains', 'https://widget.fr3.eu.criteo.com/dis/dis.aspx');
// cy.url().should('contains', 'https://www.w3schools.com/html/html_intro.asp');
// cy.visit('https://www.ukr.net/');
// cy.url().should('contains', 'https://www.ukr.net/news/main.html');
// cy.url().should('contains', 'https://platform.twitter.com/widgets/widget_iframe.2b2d73daf636805223fb11d48f3e94f7.html');
// cy.get('article').click();
// cy.get('.im:nth-child(1) .im-tl_a').click();

cy.visit('https://example.cypress.io/commands/actions');
// cy.url().should('contains', 'https://example.cypress.io/commands/querying');
// cy.url().should('contains', 'https://example.cypress.io/');
// cy.url().should('contains', 'https://example.cypress.io/commands/actions');
cy.get('#couponCode1').click();
cy.get('#couponCode1').type('asdf');
cy.get('.btn:nth-child(2)').click();
cy.get('.action-form').submit();





    })
})