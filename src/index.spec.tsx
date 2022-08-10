import {Renderer} from 'react-dom';
import App from './components/App';
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

    it('renders the app', () => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);

        require('./index.tsx');

        expect(mockRender).toHaveBeenCalledWith(
            <React.StrictMode>
                <App
                    season={expect.anything()}
                    clock={expect.anything()}
                    updateInterval={expect.anything()}
                />
            </React.StrictMode>
        );
    });
});
