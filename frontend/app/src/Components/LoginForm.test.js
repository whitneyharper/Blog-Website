import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import LoginForm from './LoginForm';

//TEST FOR FORM COMPONENT RENDER
test('Login form should be rendered', () => {
    render(
        <LoginForm />
    );
    const form = screen.getByTestId('login-form');
    expect(form).toBeInTheDocument();
})

//TEST HEADING IS RENDER
test('heading should be rendered', () => {
    render(
        <LoginForm />
    );
    const form = screen.getByText('Welcome');
    expect(form).toBeInTheDocument();
})

//TEST HEADING HAS TEXT WELCOME
test('heading should have text "Welcome"', () => {
    render(
        <LoginForm />
    );
    const form = screen.getByText('Welcome');
    expect(form).toHaveTextContent('Welcome');
})

//TEST PLACEHOLDER TEXT "ENTER YOU EMAIL" IS RENDER
test('input field should have placeholder text "Enter your email"', () => {
    render(
        <LoginForm />
    );
    const form = screen.getByPlaceholderText('Enter your email');
    expect(form).toBeInTheDocument();
})

//SIGN IN BUTTON CAN BE CLICKED
test('continue button can be clicked', () => {
    render(
        <LoginForm />            
        );
    const button = screen.getByTestId('login-button');
    fireEvent.click(button);
    expect(button).toBeEnabled();
})

//TEST SIGN UP LINK SHOULD BE RENDERED"
test('sign up link should be rendered', () => {
    render(
        <LoginForm />
    );
    const link = screen.getByText(/Sign up/i);
    expect(link).toBeInTheDocument();
})

//TEST SIGN UP LINK HAS TEXT "SIGN UP"
test('sign up link should have text "Sign up"', () => {
    render(
        <LoginForm />
    );
    const link = screen.getByText(/Sign up/i);
    expect(link).toHaveTextContent(/Sign up/i);
})