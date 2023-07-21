import AuthButton from "../../src/components/sesion/authbutton";
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { useRouter } from 'next/router'
import '@testing-library/jest-dom/extend-expect';

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))

describe("rendering Login button", () => {
  test('renders Log in button when on "/" route', () => {
    useRouter.mockReturnValue({
      pathname: "/",
      isReady: true,
    })
    render(<AuthButton></AuthButton>)
    const logInButton = screen.getByText('Log in');
    expect(logInButton).toBeInTheDocument();
    
    });
})
describe("rendering SignUp button", () => {
  test('renders sign up when on "/Login" route',() => {
    useRouter.mockReturnValue({
      pathname: "/login",
      isReady: true,
    })
    render(<AuthButton></AuthButton>)
    const signUpButton = screen.getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
    
  })
});

  