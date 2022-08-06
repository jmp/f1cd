import {Renderer} from 'react-dom';
import App from './App';
import React from 'react';

describe('index', () => {
    let mockRender: Renderer;

    beforeEach(() => {
        mockRender = jest.fn();
        jest.mock('react-dom/client', () => ({
            createRoot: jest.fn(() => ({ render: mockRender }))
        }));
    });

    test('renders the App', () => {
        const root = document.createElement('div');
        root.id = 'root';
        document.body.appendChild(root);

        require('./index.tsx');

        expect(mockRender).toHaveBeenCalledWith(
            <React.StrictMode>
                <App rounds={expect.anything()} getDate={expect.anything()} />
            </React.StrictMode>
        );
    });
});
