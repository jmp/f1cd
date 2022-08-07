import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from './Header';

describe('header', () => {
    it('shows a heading with the page title', () => {
        render(<Header />);

        const element = screen.getByTestId('heading');

        expect(element).toBeInTheDocument();
    });
});