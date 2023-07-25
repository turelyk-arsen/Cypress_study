describe("My test", () => {
  //before
  //after
  //beforeEach
  //afterEach

  before(() => {
    cy.log("*** launch app ***");
  });

  after(() => {
    cy.log("*** close app ***");
  });
  beforeEach(()=> {
    cy.log('*** *** *** LOGIN')
  })
  afterEach (() => {
    cy.log('*** *** *** LOGOUT')
  })
  it("search", () => {
    cy.log("**** searching ****");
  });
  it("advanced search", () => {
    cy.log("**** advanced searching ****");
  });
  it("listing products", () => {
    cy.log("**** listing products ****");
  });
});
