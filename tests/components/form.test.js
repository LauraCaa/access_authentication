import Form from "../../src/components/session/form";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe("create an account", () => {
    test('submits the form with correct user data', () => {
      render(<Form/>)
      const nameInput = screen.getByPlaceholderText('Name');
      const emailInput = screen.getByPlaceholderText('Email');
      const passwordInput = screen.getByPlaceholderText('Password');
      const submitButton = screen.getByText('Create account');

      fireEvent.change(nameInput, { target: { value: 'Camila' } });
      fireEvent.change(emailInput, { target: { value: 'cardenas@gmail.com' } });
      fireEvent.change(passwordInput, { target: { value: '123456' } });
      const mockResponse = {
        data: {
          user: {
            id: 123,
            token: 'token_value',
            name: 'Camila',
            email: 'cardenas@gmail.com',
          },
        },
      };
      jest.spyOn(axios, 'post').mockResolvedValue(mockResponse);

      fireEvent.click(submitButton);
      expect(localStorage.getItem('user_id')).toBe('123');
      expect(localStorage.getItem('token')).toBe('token_value');
      });
  })