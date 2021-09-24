import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import MainPage from '../MainPage';

describe('<MainPage />', () => {
    it('renders correctly', () => {
        const { container } = render(<MainPage dogs={[{ name: 'testdoge', url: 'https://displate.com' }]} />);

        expect(container).toMatchSnapshot();
    });

    it('opens modal on dog button click', () => {
        const { getByText } = render(<MainPage dogs={[{ name: 'testdoge', url: 'https://displate.com' }]} />);

        waitFor(() => {
            fireEvent.click(getByText('testdoge'));

            expect(getByText('Another pupper')).toBeInTheDocument();
        });
    });

    it('closes modal on button click', () => {
        const { getByText } = render(<MainPage dogs={[{ name: 'testdoge', url: 'https://displate.com' }]} />);

        waitFor(() => {
            fireEvent.click(getByText('testdoge'));

            const closeButton = getByText('Close');

            expect(closeButton).toBeInTheDocument();

            fireEvent.click(closeButton);

            expect(closeButton).not.toBeInTheDocument();
        });
    });
});
