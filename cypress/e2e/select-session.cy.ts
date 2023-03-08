/// <reference types="cypress" />

describe('select session', () => {
    beforeEach(() => {
        cy.clock(new Date('2023-03-03T18:00:00Z'), ['Date']);
        cy.visit('/');
        cy.contains('Race').click();
    });

    it('shows name of the selected session', () => {
        cy.get('[data-testid="session-title"]').should('have.text', 'Race')
    });

    it('shows remaining time until the selected session', () => {
        cy.get('[data-testid="remaining-time"]').should('have.text', '1 day 21 hours 0 minutes 0 seconds')
    });
});

export {};
