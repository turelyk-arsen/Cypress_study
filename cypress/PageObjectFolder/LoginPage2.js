class Login {
  txtUserName = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  txtPass = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  btnSubmit = ".oxd-button"

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }
  setPasswordName(password) {
    cy.get(this.txtPass).type(password);
  }
  clickSubmit() {
    cy.get(this.btnSubmit).click();
  }
  verifyLogin() {
    cy.get(".oxd-topbar-header-breadcrumb > .oxd-text").should(
      "have.text",
      "Dashboard"
    );
  }
}

export default Login;
