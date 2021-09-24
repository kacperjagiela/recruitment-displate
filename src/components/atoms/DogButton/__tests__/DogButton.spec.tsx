import React from 'react';
import { render } from '@testing-library/react';

import DogButton from '../DogButton';

describe('<DogButton />', () => {
    it('renders correctly', () => {
        const { container } = render(<DogButton buttonText="" onClick={jest.fn} />);

        expect(container).toMatchSnapshot();
    });
});
