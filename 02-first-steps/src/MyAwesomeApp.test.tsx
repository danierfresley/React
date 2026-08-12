import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MyAwesomeApp } from "./MyAwesomeApp";


describe('MyAwesomeApp', () => {
    test('should render firstName and lastName', () => {
        const { container } = render(<MyAwesomeApp />)
        //screen.debug();
        const h1 = container.querySelector('h1');
        const h3 = container.querySelector('h3');
        console.log(h1?.innerHTML);
        expect(h1?.innerHTML).toContain('Danier');
        expect(h3?.innerHTML).toContain('Vanegas');
    });
    test('should render - screen', () => {
        render(<MyAwesomeApp />);
        screen.debug();
        const h1 = screen.getByTestId('first-name-title');
        expect(h1.innerHTML).toContain('Danier');
    });
    test('should match snapshot', () => {
        const { container } = render(<MyAwesomeApp />);
        expect(container).toMatchSnapshot();

    });
});