export const filterDogsByBreed = (searchValue: string, dogBreedName: string): boolean => {
    const dogBreedNameSplited = dogBreedName.split(' ');

    for (let index = 0; index < dogBreedNameSplited.length; index++) {
        const namePart = dogBreedNameSplited[index];

        if (namePart.includes(searchValue.toLowerCase())) {
            return true;
        }
    }

    return false;
};
