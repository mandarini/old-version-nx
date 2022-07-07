describe('web', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary&args=name:Katerina;age:34;happy:true;'));
  it('should render the component', () => {
    cy.get('oldws-root').should('exist');
  });
});