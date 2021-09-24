import { Link, Text } from '@chakra-ui/layout';

const Footer: React.FC = () => (
    <Text as="h5" textStyle="h5" color="white" textAlign="center" py={4}>
        Developed by <Link href="https://github.com/kacperjagiela">Kacper Jagieła</Link> for{' '}
        <Link href="https://displate.com">Displate</Link>
    </Text>
);

export default Footer;
