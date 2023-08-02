import SignOutButton from "@/src/components/session/signoutbutton";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cookies from 'js-cookie';

jest.mock('js-cookie', () => ({
  remove: jest.fn(),
}));

describe('SignOutButton', () => {
  test('should remove cookies and redirect to login page when clicked', () => {
    render(<SignOutButton></SignOutButton>);
    
    const logoutButton = screen.getByRole('button', { name:/Log out/});
    fireEvent.click(logoutButton);  

    expect(Cookies.remove).toHaveBeenCalledWith('token');
    expect(Cookies.remove).toHaveBeenCalledWith('user_id');
  });
});