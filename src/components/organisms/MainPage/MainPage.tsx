import { useDisclosure } from '@chakra-ui/hooks';
import { Box } from '@chakra-ui/layout';
import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/modal';
import { Stack } from '@chakra-ui/react';

import { Button } from '~/components/atoms';
import { DogsList, Search } from '~/components/molecules';
import Dog from '~/types/Dog';

import useMainPage from './useMainPage';

interface Props {
    dogs: Dog[];
}

const MainPage: React.FC<Props> = ({ dogs }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { currentDog, onDogButtonClick, isImageLoading, onImageLoad, searchValue, onSearch, filteredDogs } =
        useMainPage(dogs);

    return (
        <Box bg="blue.900" px={['10%', '20%']} minH="100vh">
            <Search searchValue={searchValue} onSearch={onSearch} />
            <DogsList dogs={filteredDogs} onModalOpen={onOpen} onDogButtonClick={onDogButtonClick} />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textTransform="capitalize">{currentDog.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{currentDog.url}</ModalBody>

                    <ModalFooter>
                        <Stack spacing={3} direction="row">
                            <Button buttonText="Another pupper" onClick={onClose} />
                            <Button buttonText="Close" variant="outline" onClick={onClose} />
                        </Stack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default MainPage;
