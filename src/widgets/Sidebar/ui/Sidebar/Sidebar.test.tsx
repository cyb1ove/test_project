import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranlation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar is existing', () => {
    renderWithTranlation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    renderWithTranlation(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(sidebar);
    expect(sidebar).toHaveClass('collapsed');
  });
});
