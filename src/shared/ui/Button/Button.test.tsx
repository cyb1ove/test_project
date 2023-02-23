/* eslint-disable i18next/no-literal-string */
import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from './Button';

describe('Test button', () => {
  test('Check button existance', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Check specific class', () => {
    render(<Button theme={ThemeButton.BACKGROUND}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('background');
    screen.debug();
  });
});
