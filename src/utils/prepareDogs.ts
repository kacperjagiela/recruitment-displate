import Dog from '~/types/Dog';

export const prepareDogs = (dogBreed: [mainBread: string, subBread: string[]]): Dog[] => {
    const preparedDogs = [];

    // Check if dogBreed has a subBread
    // For every subBread create a Dog object and push it to preparedDogs array
    // If bread does not have a subBread create a Dog object accordingly and push that object to preparedDogs array
    if (dogBreed[1].length > 0) {
        dogBreed[1].forEach((subBread: string) =>
            preparedDogs.push({
                name: `${subBread} ${dogBreed[0]}`,
                url: `https://dog.ceo/api/breed/${dogBreed[0]}/${subBread}/images/random`,
            }),
        );
    } else {
        preparedDogs.push({
            name: `${dogBreed[0]}`,
            url: `https://dog.ceo/api/breed/${dogBreed[0]}/images/random`,
        });
    }

    return preparedDogs;
};
