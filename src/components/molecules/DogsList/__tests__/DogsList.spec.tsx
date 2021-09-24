import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import DogsList from '../DogsList';

describe('<DogsList />', () => {
    it('renders correctly', () => {
        const { container } = render(<DogsList dogs={[]} onModalOpen={jest.fn} onDogButtonClick={jest.fn} />);

        expect(container).toMatchSnapshot();
    });

    it('opens modal and handles dog button click on button click', () => {
        const onModalOpen = jest.fn();
        const onDogButtonClick = jest.fn();

        const { getByText } = render(
            <DogsList
                dogs={[{ name: 'testDog', url: '' }]}
                onModalOpen={onModalOpen}
                onDogButtonClick={onDogButtonClick}
            />,
        );

        fireEvent.click(getByText('testDog'));

        expect(onModalOpen).toHaveBeenCalledTimes(1);
        expect(onDogButtonClick).toHaveBeenCalledTimes(1);
    });
});
