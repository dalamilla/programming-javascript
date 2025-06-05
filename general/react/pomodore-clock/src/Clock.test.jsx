import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Clock from './Clock.jsx';

describe('clock', () => {
  it('render clock', () => {
    render(<Clock />);
    const linkElement = screen.getByText('Pomodore Clock');
    expect(linkElement).toBeDefined();
  });
});
