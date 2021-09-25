import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/toast';
import { debounce } from 'throttle-debounce';

import { fetchDogImageByUrl } from '~/services/dogAPI';
import Dog from '~/types/Dog';
import { filterDogsByBreed } from '~/utils/filterDogsByBreed';

interface UseMainPage {
    currentDog: Dog;
    onDogButtonClick: (dog: Dog) => void;
    isImageLoading: boolean;
    onImageLoad: () => void;
    searchValue: string;
    onSearch: (searchValue: string) => void;
    filteredDogs: Dog[];
    currentImageSrc: string;
    clearImage: () => void;
    clearSearch: () => void;
    fetchRandomDogImage: (url: string) => void;
}

const useMainPage = (dogs: Dog[]): UseMainPage => {
    const [currentDog, setCurrentDog] = useState({ name: '', url: '' });
    const [searchValue, setSearchValue] = useState('');
    const [isImageLoading, setIsImageLoading] = useState(true);
    const [currentImageSrc, setCurrentImageSrc] = useState('');
    const toast = useToast();

    const [filteredDogs, setFilteredDogs] = useState(dogs);

    useEffect(() => {
        if (searchValue.length > 0) {
            filterDogsBySearchValue(searchValue);
        } else {
            setFilteredDogs(dogs);
        }
    }, [searchValue]);

    useEffect(() => {
        if (dogs.length === 0) {
            toast({
                position: 'top',
                title: 'Error.',
                description: 'Something went wrong, when connecting to API.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        }
    }, [dogs]);

    const fetchRandomDogImage = async (url: string) => {
        setCurrentImageSrc('');
        setIsImageLoading(true);

        const imageUrl = (await fetchDogImageByUrl(url)) as string;

        setCurrentImageSrc(imageUrl);
    };

    const onDogButtonClick = (dog: Dog) => {
        fetchRandomDogImage(dog.url);
        setIsImageLoading(true);
        setCurrentDog(dog);
    };

    const clearImage = () => setCurrentImageSrc('');

    const clearSearch = () => setSearchValue('');

    const filterDogsBySearchValue = debounce(350, (searchValue) => {
        const matchedDogs = dogs.filter((dog) => filterDogsByBreed(searchValue, dog.name));

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
        currentImageSrc,
        clearImage,
        clearSearch,
        fetchRandomDogImage,
    };
};

export default useMainPage;
