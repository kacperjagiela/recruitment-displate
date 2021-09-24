import { Input } from '@chakra-ui/input';
import { Box, Text } from '@chakra-ui/layout';

interface Props {
    searchValue: string;
    onSearch: (value: string) => void;
}

const Search: React.FC<Props> = ({ searchValue, onSearch }: Props) => (
    <Box color="white" textStyle="h2" py={16}>
        <Text as="h2" textStyle="h2">
            Already know the bread?
        </Text>
        <Text as="h3" textStyle="h3">
            Search for it
        </Text>
        <Input
            w={['full', null, null, '80%', '60%']}
            placeholder="Germanshepherd.."
            value={searchValue}
            onChange={({ target }) => onSearch(target.value)}
            colorScheme="blue"
        />
    </Box>
);

export default Search;
