import { render, screen } from '@testing-library/react';

import { Navbar } from './Navbar';

describe('Test navbar', () => {
  test('Check button on navbar', () => {
    render(<Navbar />);
    expect(screen.getByText('Войти')).toBeInTheDocument();
  });
});
