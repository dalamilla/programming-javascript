import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Calculator from './Calculator.jsx';

describe('calculator', () => {
  it('render calculator', () => {
    render(<Calculator />);
    const linkElement = screen.getByText('Calculator');
    expect(linkElement).toBeDefined();
  });
});
