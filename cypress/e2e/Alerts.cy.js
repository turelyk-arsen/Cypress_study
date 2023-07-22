describe("Alerts", () => {

  // 1. JS Alert it will have same text and an 'OK' button.
  it.skip("js alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();

    // IN ALERT WINDOWS
    cy.on("window:alert", (t) => {
      expect(t).to.contains("I am a JS Alert");
    });
    // alert window automatically close by cypress
    cy.get("#result").should("exist");
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  // 2. JS confirm alert (with cancel and ok button)
  it.skip("js confirm alert - OK button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(':nth-child(2) > button').click()
    cy.on("window:confirm", (t) => {
        expect(t).to.contains("I am a JS Confirm");
      });
      // cypress automatically close the window by OK button
      cy.get('#result').should('have.text', 'You clicked: Ok')

  });

  it.skip("js confirm alert - CANCEL button", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(':nth-child(2) > button').click()
    cy.on("window:confirm", (t) => {
        expect(t).to.contains("I am a JS Confirm");
      });
      cy.on('window:confirm', ()=> false)
      cy.get('#result').should('have.text', 'You clicked: Ok')

  });

//   3.JS prompt alert (with text, cancel and ok button)
  it.skip("js prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns("welcome")
        
    })

    cy.get(':nth-child(3) > button').click()
    // cy.on('window:prompt', () => false) not work in video
    cy.get('#result').should('have.text', 'You entered: welcome')

  });


// 4. Authenticated alert
  it("authenticated alert", () => {

    // 1 approach
    // cy.visit("https://the-internet.herokuapp.com/basic_auth", 
    // {auth: {username: "admin", password: "admin"}});

    // cy.get('p').should('have.contain', 'Congratulations! You must have the proper credentials.')

    // 2 approach
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get('p').should('have.contain', 'Congratulations! You must have the proper credentials.')
  });
});
