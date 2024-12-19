// tests/e2e/login.spec.ts
describe('Login Page', () => {
  it('should load the login page', () => {
      cy.visit('/login');
      cy.contains('Login').should('be.visible');
  });

  it('should display validation error on empty submission', () => {
      cy.visit('/login');
      cy.get('button[type="submit"]').click();
      cy.contains('Email is required').should('be.visible');
  });

  it('should log in with valid credentials', () => {
      cy.visit('/login');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('button[type="submit"]').click();
      cy.url().should('include', '/dashboard');
  });
});
