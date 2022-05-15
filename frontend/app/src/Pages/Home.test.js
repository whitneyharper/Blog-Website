import React from "react";
import { render, screen} from "@testing-library/react";
import Home from './Home';

//TEST IMAGE IS RENDERED
test('image should be rendered', () => {
    render(
        <Home />
    )
    const image = screen.getByAltText('guy looking at sky');
    expect(image).toBeInTheDocument();
})

//TEST IMAGE HAS SRC AND ALT
test('image should have src and alt attribute', () => {
    render(
        <Home />
    )
    const image = screen.getByAltText('guy looking at sky');
    expect(image).toHaveAttribute('src', 'image-small.jpg');
    expect(image).toHaveAttribute('alt', 'guy looking at sky');
})
