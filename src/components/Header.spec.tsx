import React from 'react';
import {render, screen} from '@testing-library/react';
import {Header} from './Header';

describe('header', () => {
    it('shows a heading with the page title', () => {
        render(<Header />);

        expect(screen.getByTestId('heading')).not.toBeNull();
    });
});