import { CloseIcon } from '@chakra-ui/icons';
import { Input, InputRightElement } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';
import { InputGroup } from '@chakra-ui/react';

interface Props {
    searchValue: string;
    onSearch: (value: string) => void;
    clearSearch: () => void;
}

const Search: React.FC<Props> = ({ searchValue, onSearch, clearSearch }: Props) => (
    <Box color="white" textStyle="h2" py={12}>
        <Text as="h2" textStyle="h2">
            Woof Woof Gallery
        </Text>
        <Text as="h3" textStyle="h3" py={2}>
            Already know the bread?
        </Text>
        <Text as="h4" textStyle="h4">
            Search for it
        </Text>
        <InputGroup>
            <Input
                placeholder="Germanshepherd.."
                value={searchValue}
                onChange={({ target }) => onSearch(target.value)}
                colorScheme="blue"
            />
            {searchValue.length > 0 && (
                <InputRightElement>
                    <CloseIcon _hover={{ cursor: 'pointer' }} data-testid="clearInput" onClick={clearSearch} />
                </InputRightElement>
            )}
        </InputGroup>
    </Box>
);

export default Search;
