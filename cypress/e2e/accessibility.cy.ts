/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('color schemes', () => {
    const colorSchemes = ['light', 'dark'] as const;

    colorSchemes.forEach(scheme =>
        it(`passes with prefers-color-scheme=${scheme}`, () => {
            setPreferredColorScheme(scheme);
            cy.clock(new Date('2023-03-03T18:00:00Z'), ['Date']);

            cy.visit('/');
            cy.injectAxe();

            cy.checkA11y();
        })
    );
});

describe('screen sizes', () => {
    const presets = ['macbook-13', 'iphone-6'] as const;

    presets.forEach(preset =>
        it(`passes with ${preset} screen size`, () => {
            cy.clock(new Date('2023-03-03T18:00:00Z'), ['Date']);
            cy.viewport(preset);

            cy.visit('/');
            cy.injectAxe();

            cy.checkA11y();
        })
    );
});

function setPreferredColorScheme(scheme: 'light' | 'dark') {
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

export {};
