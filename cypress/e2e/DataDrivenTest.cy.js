describe("My test", () => {
  it("data drive test", () => {
    cy.fixture("orangehrm2").then((data) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com"
      );

      data.forEach((userdata) => {
        cy.get(
          ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
        ).type(userdata.username);
        cy.get(
          ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
        ).type(userdata.password);
        cy.get(".oxd-button").click();
        if (userdata.username == "Admin" && userdata.password == "admin123") {
          cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
            "have.text",
            userdata.expected
          );
          cy.get('.oxd-userdropdown-tab').click()
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        } else {
            cy.log(userdata.expected)
            cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected)
        }
      });
    });
  });
});
