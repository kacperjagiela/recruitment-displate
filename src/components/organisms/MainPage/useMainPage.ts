import { useState } from 'react';

import Dog from '~/types/Dog';

interface UseMainPage {
    currentDog: Dog;
    onDogButtonClick: (dog: Dog) => void;
}

const useMainPage = (): UseMainPage => {
    const [currentDog, setCurrentDog] = useState({ name: '', url: '' });

    const onDogButtonClick = (dog: Dog) => {
        setCurrentDog(dog);
    };

    return {
        currentDog,
        onDogButtonClick,
    };
};

export default useMainPage;
