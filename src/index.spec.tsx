import {Renderer} from 'react-dom';
import App from './App';
import React from 'react';

describe('index', () => {
    let mockRender: jest.Mock<Renderer>;

    beforeEach(() => {
        mockRender = jest.fn();
        jest.mock('react-dom/client', () => ({
            createRoot: jest.fn(() => ({ render: mockRender }))
        }));
    });

    afterEach(() => jest.resetModules());

    it('renders the App', () => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);

        require('./index.tsx');

        expect(mockRender).toHaveBeenCalledWith(
            <React.StrictMode>
                <App rounds={expect.anything()} getDate={expect.anything()} updateInterval={1000} />
            </React.StrictMode>
        );
    });

    it('renders the App with a valid date provider', () => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);

        require('./index.tsx');

        const { getDate } = mockRender.mock.calls[0][0].props.children.props;

        expect(getDate()).toBeInstanceOf(Date);
    });

    it('renders the App with valid rounds', () => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);

        require('./index.tsx');

        const { rounds } = mockRender.mock.calls[0][0].props.children.props;

        expect(rounds).toBeInstanceOf(Array);
        expect(rounds.length).toBeGreaterThan(0);
    });
});
