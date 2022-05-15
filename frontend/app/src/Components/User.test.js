import React from 'react';
import { render, screen } from '@testing-library/react';
import User from './User';

//TEST FOR COMPONENT RENDER
test('component should be rendered', () => {
    render(
        <User />
    );
    const user = screen.getByTestId('user');
    expect(user).toBeInTheDocument();
})

//TEST HEADING IS RENDER
test('heading User Name should be rendered', () => {
    render(
        <User />
    );
    const headingOne = screen.getByText('User Name');
    expect(headingOne).toBeInTheDocument();
})

//TEST HEADING HAS TEXT User Name
test('heading should have text "User Name"', () => {
    render(
        <User />
    );
    const headingOne = screen.getByText('User Name');
    expect(headingOne).toHaveTextContent('User Name');
})

//TEST HEADING IS RENDER
test('heading Blog should be rendered', () => {
    render(
        <User />
    );
    const headingTwo = screen.getByText('Blog');
    expect(headingTwo).toBeInTheDocument();
})

//TEST HEADING HAS TEXT User Name
test('heading should have text "Blog"', () => {
    render(
        <User />
    );
    const headingTwo = screen.getByText('Blog');
    expect(headingTwo).toHaveTextContent('Blog');
})

//TEST IMAGE IS RENDERED
test('image should be rendered', () => {
    render(
        <User />
    )
    const image = screen.getByAltText('user pic');
    expect(image).toBeInTheDocument();
})

//TEST IMAGE HAS SRC AND ALT
test('image should have src and alt attribute', () => {
    render(
        <User />
    )
    const image = screen.getByAltText('user pic');
    expect(image).toHaveAttribute('src', 'user.png');
    expect(image).toHaveAttribute('alt', 'user pic');
})