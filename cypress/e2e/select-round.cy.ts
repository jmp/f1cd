/// <reference types="cypress" />

describe('select round', () => {
    beforeEach(() => {
        cy.clock(new Date('2023-03-03T18:00:00Z'), ['Date']);
        cy.visit('/');
        cy.get('[data-testid="round-selector"]').select('Belgium');
    });

    it('shows name of the first session', () => {
        cy.get('[data-testid="session-title"]').should('have.text', 'Practice 1')
    });

    it('shows remaining time until the first session', () => {
        cy.get('[data-testid="remaining-time"]').should('have.text', '146 days 20 hours 30 minutes 0 seconds')
    });
});

export {};
