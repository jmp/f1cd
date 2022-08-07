import React from 'react';
import {render, screen} from '@testing-library/react';
import {Footer} from './Footer';

describe('footer', () => {
    it('links to the source code', () => {
        render(<Footer />);

        expect(screen.getByTestId('source-link')).toBeInTheDocument();
    });

    it('links to the issue tracker', () => {
        render(<Footer />);

        expect(screen.getByTestId('issues-link')).toBeInTheDocument();
    });
});