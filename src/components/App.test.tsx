import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import App from './App';

describe('App', () => {
    const rounds = [{
        title: 'Test round',
        startDate: new Date('2022-01-07T12:00:00Z'),
        sessions: [{
            title: 'First session',
            date: new Date('2022-01-01T12:00:00Z')
        }, {
            title: 'Second session',
            date: new Date('2022-01-07T12:00:00Z')
        }, {
            title: 'Third session',
            date: new Date('2022-01-14T12:00:00Z')
        }]
    }];
    const getDate = () => new Date('2022-01-05T12:00:00Z')

    it('renders round name', () => {
        render(<App rounds={rounds} getDate={getDate} updateInterval={0} />);

        const element = screen.getByTestId('round');

        expect(element).toHaveTextContent('Test round');
    });

    it('renders session name', () => {
        render(<App rounds={rounds} getDate={getDate} updateInterval={0} />);

        const element = screen.getByTestId('session');

        expect(element).toHaveTextContent('Second session');
    });

    it('renders countdown', () => {
        render(<App rounds={rounds} getDate={getDate} updateInterval={0} />);

        const element = screen.getByTestId('countdown');

        expect(element).toHaveTextContent(/(((\d+ days? )?\d+ hours? )?\d+ minutes? )?\d+ seconds?/);
    });

    it('updates countdown', async () => {
        const mockGetDate = jest.fn().mockReturnValue(new Date('2022-01-06T09:56:56Z'));

        render(<App rounds={rounds} getDate={mockGetDate} updateInterval={0} />);

        const element = screen.getByTestId('countdown');
        const previousContent = element.textContent!;

        mockGetDate.mockReturnValue(new Date('2022-01-06T09:56:57Z'));

        await waitFor(() => {
            expect(element).not.toHaveTextContent(previousContent);
        });
    });
});