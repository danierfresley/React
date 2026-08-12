import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { ItemCounter } from './ItemCounter';


describe('ItemCounter', () => {

    test('should render with default values', () => {
        render(<ItemCounter name='testName'/>);
        screen.debug();
        expect(screen.getByText('testName')).toBeDefined();
        expect(screen.getByText('testName')).not.toBeNull();
    });

    test('should increasse count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1}/>)

        const [buttonAdd] = screen.getAllByRole('button');

        console.log(buttonAdd.innerHTML);

        fireEvent.click(buttonAdd);
        expect(screen.getByText(2)).toBeDefined();
    });

    test('should decrease count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1}/>)

        const [, buttonSubtract] = screen.getAllByRole('button');

        console.log(buttonSubtract.innerHTML);

        fireEvent.click(buttonSubtract);
        expect(screen.getByText('1')).toBeDefined();
    });

    test('should change to red when count is 1', () => {
        const quantity = 1;
        const name = 'Test name';
        render(<ItemCounter name={name} quantity={quantity}/>);
        const itemText = screen.getByText(name);
        
        console.log(itemText.style.color);

        expect(itemText.style.color).toBe('red')
        
    });
});
