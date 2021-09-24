import { ReactElement } from 'react';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): ReactElement<any, any> => {
    return <Component {...pageProps} />;
};

export default App;
