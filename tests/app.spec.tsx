import { it, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    expect(screen.getByText('Chromatic Tuner'));
  });
});
