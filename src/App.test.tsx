import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders round name', () => {
    render(<App />);

    const element = screen.getByTestId('round');

    expect(element).not.toBeEmptyDOMElement();
  });

  it('renders session name', () => {
    render(<App />);

    const element = screen.getByTestId('session');

    expect(element).not.toBeEmptyDOMElement();
  });

  it('renders countdown', () => {
    render(<App />);

    const element = screen.getByTestId('countdown');

    expect(element).not.toBeEmptyDOMElement();
  });
});