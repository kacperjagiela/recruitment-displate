import { Button } from '@chakra-ui/button';

interface Props {
    buttonText: string;
    onClick: () => void;
    variant?: string;
}

const DogButton: React.FC<Props> = ({ buttonText, onClick, variant }: Props) => (
    <Button colorScheme="blue" onClick={onClick} textTransform="capitalize" textStyle="h4" variant={variant || 'solid'}>
        {buttonText}
    </Button>
);

export default DogButton;
