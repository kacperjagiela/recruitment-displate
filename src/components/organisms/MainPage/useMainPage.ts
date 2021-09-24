import { useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';

import Dog from '~/types/Dog';
import { filterDogsByBread } from '~/utils/filterDogsByBread';

interface UseMainPage {
    currentDog: Dog;
    onDogButtonClick: (dog: Dog) => void;
    isImageLoading: boolean;
    onImageLoad: () => void;
    searchValue: string;
    onSearch: (searchValue: string) => void;
    filteredDogs: Dog[];
}

const useMainPage = (dogs: Dog[]): UseMainPage => {
    const [currentDog, setCurrentDog] = useState({ name: '', url: '' });
    const [searchValue, setSearchValue] = useState('');
    const [isImageLoading, setIsImageLoading] = useState(true);

    const [filteredDogs, setFilteredDogs] = useState(dogs);

    useEffect(() => {
        if (searchValue.length > 0) {
            filterDogsBySearchValue(searchValue);
        } else {
            setFilteredDogs(dogs);
        }
    }, [searchValue]);

    const onDogButtonClick = (dog: Dog) => {
        setIsImageLoading(true);
        setCurrentDog(dog);
    };

    const filterDogsBySearchValue = debounce(350, (searchValue) => {
        const matchedDogs = dogs.filter((dog) => filterDogsByBread(searchValue, dog.name));

        setFilteredDogs(matchedDogs);
    });

    const onImageLoad = () => setIsImageLoading(false);

    const onSearch = (searchValue: string) => setSearchValue(searchValue);

    return {
        currentDog,
        onDogButtonClick,
        isImageLoading,
        onImageLoad,
        searchValue,
        onSearch,
        filteredDogs,
    };
};

export default useMainPage;
