describe('Github page', () => {
  describe('not working with percy snapshot', () => {
    it('takes snapshot', () => {
      cy.visit('/');
      cy.percySnapshot();
    });
  });
});
