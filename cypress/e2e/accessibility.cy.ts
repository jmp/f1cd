/// <reference types="cypress" />
/// <reference types="cypress-axe" />

function setPreferredColorScheme(scheme: string) {
    cy.wrap(
        Cypress.automation('remote:debugger:protocol', {
            command: 'Emulation.setEmulatedMedia',
            params: {
                media: 'page',
                features: [{name: 'prefers-color-scheme', value: scheme}],
            },
        })
    );
}

describe('accessibility', () => {
    ['dark', 'light'].forEach(scheme =>
        it(`passes accessibility checks in ${scheme} mode`, () => {
            setPreferredColorScheme(scheme);

            cy.visit('/');
            cy.injectAxe();
            cy.checkA11y();
        })
    );
});

export {};
