describe('Github page', () => {
  describe('working without percy snapshot', () => {
    it('takes snapshot', () => {
      cy.visit('/');

      cy.get('h1').should('contain', ' Where the world builds software ');
    });

    describe('when clicked on upper login button', () => {
      it('redirects to login', () => {
        cy.visit('/');

        cy.get('a[href="/login"]')
          .click();

        cy.url().should('eq', `${Cypress.config().baseUrl}login`);
      });
    });
  })

  describe('not working with percy snapshot', () => {
    it('takes snapshot', () => {
      cy.visit('/');

      cy.get('h1').should('contain', ' Where the world builds software ');

      cy.percySnapshot();
    });

    describe('when clicked on upper login button', () => {
      it('redirects to login', () => {
        cy.visit('/');

        cy.get('a[href="/login"]')
          .click();

        cy.url().should('eq', `${Cypress.config().baseUrl}login`);

        cy.percySnapshot();
      });
    });
  })

});
