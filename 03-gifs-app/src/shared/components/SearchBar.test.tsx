import { describe, test, expect, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { SearchBar } from './SearchBar';

describe('SearchBar', () => {
    test('should render the searchbar correctly', () => {

        const { container } = render(<SearchBar onQuery={() => { }} />);

        console.log(screen.debug());


        expect(container).toMatchSnapshot();
        expect(screen.getByRole('textbox')).toBeDefined();
        expect(screen.getByRole('button')).toBeDefined();

    });

    test('should call onQuery with the correct value after 700ms', async () => {

        const mockOnQuery = vi.fn();

        render(<SearchBar onQuery={mockOnQuery} />);

        const input = screen.getByRole('textbox');

        fireEvent.change(input, { target: { value: 'test2' } });

        screen.debug();

        await waitFor(() => {
            expect(mockOnQuery).toHaveBeenCalled();
            expect(mockOnQuery).toHaveBeenCalledWith('test2');
        });
    });

});