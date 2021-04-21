describe('Github page', () => {
  it('takes snapshot', () => {
    cy.visit('/');

    cy.get('h1').should('contain', ' Where the world builds software ');

    cy.percySnapshot();
  });

  describe('when clicked on upper login button', () => {
    it('redirects to login', () => {
      cy.visit('/');

      cy.get('a[href="/login]')
        .click();

      cy.url().should('eq', `${Cypress.config().baseUrl}login`);

      cy.percySnapshot();
    });
  });
});
