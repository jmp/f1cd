import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
    const rounds = [{
        title: 'Test round',
        startDate: new Date('2022-01-07T12:00:00Z'),
        sessions: [{
            title: 'Wrong session',
            date: new Date('2022-01-01T12:00:00Z')
        }, {
            title: 'Correct session',
            date: new Date('2022-01-07T12:00:00Z')
        }, {
            title: 'Wrong session',
            date: new Date('2022-01-14T12:00:00Z')
        }]
    }];

    it('renders round name', () => {
        render(<App rounds={rounds} />);

        const element = screen.getByTestId('round');

        expect(element).not.toBeEmptyDOMElement();
    });

    it('renders session name', () => {
        render(<App rounds={rounds} />);

        const element = screen.getByTestId('session');

        expect(element).not.toBeEmptyDOMElement();
    });

    it('renders countdown', () => {
        render(<App rounds={rounds} />);

        const element = screen.getByTestId('countdown');

        expect(element).not.toBeEmptyDOMElement();
    });
});