describe("My test suite", () => {
  // direct access
  it.skip("fixtures demo test", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.fixture("orangehrm").then((data) => {
      cy.get(
        ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ).type(data.username);
      cy.get(
        ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
      ).type(data.password);
      cy.get(".oxd-button").click();
      cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
        "have.text",
        data.expected
      );
    });
  });

  //access through hook  - for multiple it block
  let userData;
  before(() => {
    cy.fixture("orangehrm").then((data) => {
      userData = data;
    });
  });

  it("fixtures demo test 2", () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userData.username);
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type(userData.password);
    cy.get(".oxd-button").click();
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      userData.expected
    );
  });
});
