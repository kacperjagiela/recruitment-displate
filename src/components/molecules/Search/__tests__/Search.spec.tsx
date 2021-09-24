import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import Search from '../Search';

describe('<Search />', () => {
    it('renders correctly', () => {
        const { container } = render(<Search searchValue="test" onSearch={jest.fn} clearSearch={jest.fn} />);

        expect(container).toMatchSnapshot();
    });

    it('renders correctly with empty value', () => {
        const { container } = render(<Search searchValue="" onSearch={jest.fn} clearSearch={jest.fn} />);

        expect(container).toMatchSnapshot();
    });

    it('clears input by clicking X', () => {
        const clearSearch = jest.fn();
        const { getByPlaceholderText, getByTestId } = render(
            <Search searchValue="" onSearch={jest.fn} clearSearch={clearSearch} />,
        );

        const input = getByPlaceholderText('Germanshepherd..') as HTMLInputElement;

        waitFor(() => {
            fireEvent.change(input, { target: { value: 'test doggie' } });

            expect(getByTestId('clearInput')).toBeInTheDocument();

            fireEvent.click(getByTestId('clearInput'));

            expect(getByTestId('clearInput')).not.toBeInTheDocument();
            expect(input.value).toBe('');
        });
    });
});
