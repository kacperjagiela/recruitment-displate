import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import DogButton from '../DogButton';

describe('<DogButton />', () => {
    it('renders correctly', () => {
        const { container } = render(<DogButton buttonText="" onClick={jest.fn} />);

        expect(container).toMatchSnapshot();
    });

    it('fires function on button click', () => {
        const onClick = jest.fn();
        const { getByText } = render(<DogButton buttonText="testButton" onClick={onClick} />);

        fireEvent.click(getByText('testButton'));

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
