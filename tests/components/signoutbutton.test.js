import SignOutButton from "../../src/components/session/signoutbutton";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import Cookies from 'js-cookie';

jest.mock('js-cookie', () => ({
  remove: jest.fn(),
}));
jest.mock('next/router', () => require('next-router-mock'));

describe('SignOutButton', () => {
  test('should remove cookies and redirect to login page when clicked', () => {
    mockRouter.push("/users");
    render(
      <SignOutButton/>,
      { wrapper: MemoryRouterProvider }
    );
    fireEvent.click(screen.getByText('Log out'));
    expect(Cookies.remove).toHaveBeenCalledWith('token');
    expect(Cookies.remove).toHaveBeenCalledWith('user_id');
    expect(mockRouter).toMatchObject({
      pathname: "/login",
    });
  });
});