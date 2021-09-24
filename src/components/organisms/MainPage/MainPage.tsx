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
import { Image, Spinner, Stack } from '@chakra-ui/react';

import { Button } from '~/components/atoms';
import { DogsList, Footer, Search } from '~/components/molecules';
import Dog from '~/types/Dog';

import useMainPage from './useMainPage';

interface Props {
    dogs: Dog[];
}

const MainPage: React.FC<Props> = ({ dogs }: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {
        currentDog,
        onDogButtonClick,
        isImageLoading,
        onImageLoad,
        currentImageSrc,
        searchValue,
        onSearch,
        filteredDogs,
        fetchRandomDogImage,
        clearImage,
        clearSearch,
    } = useMainPage(dogs);

    return (
        <Box bg="blue.900" px={['10%', '20%', null, null, '30%']}>
            <Box minH="calc(100vh - 52px)">
                <Search searchValue={searchValue} onSearch={onSearch} clearSearch={clearSearch} />
                <DogsList dogs={filteredDogs} onModalOpen={onOpen} onDogButtonClick={onDogButtonClick} />

                <Modal
                    isOpen={isOpen}
                    onClose={() => {
                        onClose();
                        clearImage();
                    }}
                >
                    <ModalOverlay />
                    <ModalContent minH="md">
                        <ModalHeader textTransform="capitalize">{currentDog.name}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody display="flex" justifyContent="center" alignItems="center">
                            {isImageLoading && <Spinner />}
                            <Image src={currentImageSrc} onLoad={onImageLoad} alt={currentDog.name} />
                        </ModalBody>

                        <ModalFooter>
                            <Stack spacing={3} direction="row">
                                <Button
                                    buttonText="Another pupper"
                                    onClick={() => fetchRandomDogImage(currentDog.url)}
                                />
                                <Button buttonText="Close" variant="outline" onClick={onClose} />
                            </Stack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
            <Footer />
        </Box>
    );
};

export default MainPage;
