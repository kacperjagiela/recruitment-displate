import { Stack } from '@chakra-ui/layout';

import { Button } from '~/components/atoms';
import Dog from '~/types/Dog';

interface Props {
    dogs: Dog[];
    onModalOpen: () => void;
    onDogButtonClick: (dog: Dog) => void;
}

const DogsList: React.FC<Props> = ({ dogs, onModalOpen, onDogButtonClick }: Props) => (
    <Stack direction={['column']}>
        {dogs.map((dog) => (
            <Button
                key={dog.name}
                buttonText={dog.name}
                onClick={() => {
                    onDogButtonClick(dog);
                    onModalOpen();
                }}
            />
        ))}
    </Stack>
);

export default DogsList;
