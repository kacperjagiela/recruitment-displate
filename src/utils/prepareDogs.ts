import Dog from '~/types/Dog';

export const prepareDogs = (dogBreed: [mainBreed: string, subBreed: string[]]): Dog[] => {
    const preparedDogs = [];

    // Check if dogBreed has a subBreed
    // For every subBreed create a Dog object and push it to preparedDogs array
    // If breed does not have a subBreed create a Dog object accordingly and push that object to preparedDogs array
    if (dogBreed[1].length > 0) {
        dogBreed[1].forEach((subBreed: string) =>
            preparedDogs.push({
                name: `${subBreed} ${dogBreed[0]}`,
                url: `https://dog.ceo/api/breed/${dogBreed[0]}/${subBreed}/images/random`,
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
