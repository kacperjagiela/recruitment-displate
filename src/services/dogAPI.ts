import Dog from '~/types/Dog';
import { prepareDogs } from '~/utils/prepareDogs';

export const fetchDefaultDogs = async (): Promise<Dog[]> => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all');

        if (response.status === 200) {
            const responseBody = await response.json();
            const dogs = responseBody.message;

            const preparedDogs = Object.entries(dogs)
                .map((dogBreed) => prepareDogs(dogBreed as [string, string[]]))
                .flat();

            return preparedDogs;
        } else {
            return [];
        }
    } catch (error) {
        return [];
    }
};

export const fetchDogImageByUrl = async (url: string): Promise<string> => {
    try {
        const response = await fetch(url);

        if (response.status === 200) {
            const responseBody = await response.json();
            const imageUrl = responseBody.message;

            return imageUrl;
        } else {
            return '';
        }
    } catch (error) {
        return '';
    }
};
