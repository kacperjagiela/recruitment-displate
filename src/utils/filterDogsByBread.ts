export const filterDogsByBread = (searchValue: string, dogBreadName: string): boolean => {
    const dogBreadNameSplited = dogBreadName.split(' ');

    for (let index = 0; index < dogBreadNameSplited.length; index++) {
        const namePart = dogBreadNameSplited[index];

        if (namePart.startsWith(searchValue.toLowerCase())) {
            return true;
        }
    }

    return false;
};
