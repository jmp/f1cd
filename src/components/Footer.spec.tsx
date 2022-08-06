import React from 'react';
import {render, screen} from '@testing-library/react';
import {Footer} from './Footer';

describe('footer', () => {
    it('has a link to the source code', () => {
        render(<Footer />);

        const element = screen.getByTestId('source-link');

        expect(element).toBeInTheDocument();
    });

    it('has a link to the issue tracker', () => {
        render(<Footer />);

        const element = screen.getByTestId('issues-link');

        expect(element).toBeInTheDocument();
    });
});