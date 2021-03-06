import { ReactElement } from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import '../../styles/globals.css';

const theme = extendTheme({
    fonts: {
        body: 'Lato, sans-serif',
        heading: 'Lato, sans-serif',
        mono: 'Lato, sans-serif',
    },
    textStyles: {
        h2: {
            fontSize: ['32px', '36px', '40px', '44px', '48px', '64px'],
            fontWeight: 'normal',
            lineHeight: ['40px', '48px', '56px', '64px', '72px'],
        },
        h3: {
            fontSize: ['24px', null, null, '30px', null, '36px'],
            fontWeight: 'normal',
            lineHeight: ['32px', '48px'],
        },
        h4: {
            fontSize: ['16px', null, null, null, null, '20px'],
            fontWeight: 'normal',
            lineHeight: ['32px', '32px'],
        },
        h5: {
            fontSize: ['14px', null, null, null, null, '16px'],
            fontWeight: 'normal',
            lineHeight: ['20px'],
        },
    },
});

const App = ({ Component, pageProps }: AppProps): ReactElement<Element, string> => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
