import 'jest-location-mock';

import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('Sidebar is existing', () => {
    componentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test toggle', () => {
    componentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    const button = screen.getByTestId('collapse-button');
    expect(sidebar).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(sidebar).toHaveClass('collapsed');
  });
});
