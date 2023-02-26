/// <reference types="cypress" />
/// <reference types="cypress-axe" />

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

describe('color schemes', () => {
    const colorSchemes = ['light', 'dark'] as const;

    colorSchemes.forEach(scheme =>
        it(`passes with prefers-color-scheme=${scheme}`, () => {
            setPreferredColorScheme(scheme);

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
            cy.viewport(preset);

            cy.visit('/');
            cy.injectAxe();
            cy.checkA11y();
        })
    );
});

export {};