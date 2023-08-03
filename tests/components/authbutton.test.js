import AuthButton from "../../src/components/session/authbutton";
import { render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';


jest.mock('next/router', () => require('next-router-mock'));

describe("rendering Login button", () => {
  test('renders Log in button when on "/" route', () => {
    mockRouter.push("/");
    render(<AuthButton></AuthButton>)
    const logInButton = screen.getByText('Log in');
    expect(logInButton).toBeInTheDocument();
    
    });
})
describe("rendering SignUp button", () => {
  test('renders sign up when on "/Login" route',() => {
    mockRouter.push("/login");
    render(<AuthButton></AuthButton>)
    const signUpButton = screen.getByText('Sign Up');
    expect(signUpButton).toBeInTheDocument();
    
  })
});

describe('Sign Up button', () => {
  test('redirect to sign Up /index.page page with a click', () => {
    mockRouter.push("/login");

    render(
      <AuthButton />,
      { wrapper: MemoryRouterProvider }
    );
    fireEvent.click(screen.getByText('Sign Up'));
    expect(mockRouter).toMatchObject({
      pathname: "/",
    });
  });
});

describe('Log in button', () => {
  test('redirect to login page with a click', () => {
    render(
      <AuthButton />,
      { wrapper: MemoryRouterProvider }
    );
    fireEvent.click(screen.getByText('Log in'));
    expect(mockRouter).toMatchObject({
      pathname: "/login",
    });
  });
});





    
