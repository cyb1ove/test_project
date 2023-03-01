import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Test button', () => {
  test('Check button existance', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Loader state for button should be visible', () => {
    render(<Button pending>TEST</Button>);
    expect(screen.getByRole('loader')).toBeInTheDocument();
  })
});
