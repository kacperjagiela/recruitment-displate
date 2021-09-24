import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';

interface Props {
    searchValue: string;
    onSearch: (value: string) => void;
    clearSearch: () => void;
}

const Search: React.FC<Props> = ({ searchValue, onSearch }: Props) => (
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
        <Input
            placeholder="Germanshepherd.."
            value={searchValue}
            onChange={({ target }) => onSearch(target.value)}
            colorScheme="blue"
        />
    </Box>
);

export default Search;