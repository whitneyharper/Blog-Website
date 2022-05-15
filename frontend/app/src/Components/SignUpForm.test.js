import React from "react";
import { render, screen, fireEvent} from "@testing-library/react";
import SignUpForm from './SignUpForm';

//test to see if sign up form is rendered
test('form should be in the DOM', () => {
    render(<SignUpForm />);
    const form = screen.getByTestId('sign-form');
    expect(form).toBeInTheDocument();
})

//test to see if page has a first name field
test('first name text field is in the document', () =>{
    render(<SignUpForm />);
    const textField = screen.getByPlaceholderText('Enter First Name');
    expect(textField).toBeInTheDocument();
})

//test to see if first name field label has text First Name
test('should have label text First Name', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('First Name');
    expect(labelText).toHaveTextContent('First Name');
})

//test to see if page has a last name field
test('last name text field is in the document', () =>{
    render(<SignUpForm />);
    const textField = screen.getByPlaceholderText('Enter Last Name');
    expect(textField).toBeInTheDocument();
})

//test to see if last name field label has text Last Name
test('should have label text Last Name', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('Last Name');
    expect(labelText).toHaveTextContent('Last Name');
})

//test to see if page has a username field
test('username text field is in the document', () =>{
    render(<SignUpForm />);
    const textField = screen.getByPlaceholderText('Enter Username');
    expect(textField).toBeInTheDocument();
})

//test to see if username field label has text Username
test('should have label text Username', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('Username');
    expect(labelText).toHaveTextContent('Username');
})

//test to see if page has a email field
test('Email text field is in the document', () =>{
    render(<SignUpForm />);
    const textField = screen.getByPlaceholderText('Enter Email');
    expect(textField).toBeInTheDocument();
})

//test to see if email field label has text Email
test('should have label text Email', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('Email');
    expect(labelText).toHaveTextContent('Email');
})

//test to see if page has a password field
test('password text field is in the document', () =>{
    render(<SignUpForm />);
    const textField = screen.getByPlaceholderText('Enter Password');
    expect(textField).toBeInTheDocument();
})

//test to see if password field label has text Password
test('should have label text Password', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('Password');
    expect(labelText).toHaveTextContent('Password');
})

//test to see if page has a image field
test('image file field is in the document', () =>{
    render(<SignUpForm />);
    const field = screen.getByText('Image');
    expect(field).toBeInTheDocument();
})

//test to see if image field label has text Image
test('should have label text Image', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('Image');
    expect(labelText).toHaveTextContent('Image');
})

//test to see if page has a About Me field
test('about me text field is in the document', () =>{
    render(<SignUpForm />);
    const textField = screen.getByPlaceholderText('Tell us about yourself!');
    expect(textField).toBeInTheDocument();
})

//test to see if about me field label has text About Me
test('should have label text About Me', () => {
    render(<SignUpForm />);
    const labelText = screen.getByText('About Me');
    expect(labelText).toHaveTextContent('About Me');
})

// submit button is clickable
test('submit button can be clicked', () => {
    render(<SignUpForm />);
    const button = screen.getByTestId('sign-button');
    fireEvent.click(button);
    expect(button).toBeEnabled();
});