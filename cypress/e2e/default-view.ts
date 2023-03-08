/// <reference types="cypress" />

describe('default view', () => {
    beforeEach(() => {
        cy.clock(new Date('2023-03-03T18:00:00Z'), ['Date']);
        cy.visit('/');
    });

    it('shows name of the next session', () => {
        cy.get('[data-testid="session-title"]').should('have.text', 'Practice 3')
    });

    it('shows remaining time until the next session', () => {
        cy.get('[data-testid="remaining-time"]').should('have.text', '17 hours 30 minutes 0 seconds')
    });

    it('shows past sessions on the list', () => {
        cy.get('.before').should('have.length.greaterThan', 1)
    });

    it('highlights the next session on the list', () => {
        cy.get('.selected').should('have.length', 1)
    });

    it('shows upcoming sessions on the list', () => {
        cy.get('.after').should('have.length.greaterThan', 1)
    });
});

export {};
