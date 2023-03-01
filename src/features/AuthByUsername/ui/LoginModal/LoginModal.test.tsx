import { screen } from '@testing-library/react'
import userEvent from "@testing-library/user-event";
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { LoginModal } from './LoginModal';

describe("LoginModal tests", () => {
  beforeEach(() => {
    componentRender(<LoginModal isOpen={true} />);
  })

  test("Modal should be open", () => {
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  })

  test("Inputs should be visible", () => {
    expect(screen.getByRole('login')).toBeInTheDocument();
    expect(screen.getByRole('password')).toBeInTheDocument();
  })

  test("Submit button should be visible", () => {
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument();
  })
})
