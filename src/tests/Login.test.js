import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

const email = 'trybe@trybe.com';
const password = '1234567';

describe('Requisitos do 2 ao 5', () => {
  it('Verificar se há um h1 com título "Login" na tela', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading', { name: /login/i, level: 1 });
    expect(title).toBeInTheDocument();
  });
  it('Verificar se os inputs funcionam com a validação', () => {
    renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterButtom = screen.getByRole('button', { name: /enter/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(enterButtom).toBeInTheDocument();

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    expect(enterButtom).not.toBeDisabled();

    expect(emailInput).toHaveValue(email);
    expect(passwordInput).toHaveValue(password);
  });
  it('Verificar se o botão tem o comportamento esperado', () => {
    const { history } = renderWithRouter(<App />);

    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId('password-input');
    const enterButtom = screen.getByRole('button', { name: /enter/i });

    userEvent.type(emailInput, email);
    userEvent.type(passwordInput, password);
    userEvent.click(enterButtom);

    const { location: { pathname } } = history;
    expect(pathname).toBe('/foods');

    const recoveredTokenMeal = JSON.parse(localStorage.getItem('mealsToken'));
    const recoveredTokenCocktails = JSON.parse(localStorage.getItem('cocktailsToken'));
    const recoveredUser = JSON.parse(localStorage.getItem('user'));

    expect(recoveredTokenMeal).toBe(1);
    expect(recoveredTokenCocktails).toBe(1);
    expect(recoveredUser).toEqual({ email: 'trybe@trybe.com' });
  });
});

// Ajuda do Pessine: Context tem que ser no app por questões de render
