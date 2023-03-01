import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import { Navbar } from './Navbar';

describe('Test navbar', () => {
  test('Check button on navbar', () => {
    componentRender(<Navbar />);
    expect(screen.getByText('Войти')).toBeInTheDocument();
  });
});
