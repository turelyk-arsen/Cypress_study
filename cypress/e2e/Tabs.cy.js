describe("Handle tabs", () => {

  it.skip("approach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    // cy.get('.example > a').click()
    cy.get(".example > a").invoke("removeAttr", "target").click();
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000);
    //operations
    cy.go("back"); // go to parent tab
  });

  it("approach 2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    // cy.get('.example > a').click()
    cy.get(".example > a").then((e) => {
        let url = e.prop('href')
        cy.visit(url)
    })
    cy.wait(3000)
    cy.go('back')
  });
});
