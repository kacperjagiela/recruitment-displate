import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';

import { MainPage } from '~/components/organisms';
import { fetchDefaultDogs } from '~/services/dogAPI';
import Dog from '~/types/Dog';

const Home: NextPage = ({ dogs }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Woof Woof Gallery</title>
                <meta name="description" content="Gallery to search up and preview doggies" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <MainPage dogs={dogs} />
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const dogs: Dog[] = await fetchDefaultDogs();

    return {
        props: {
            dogs,
        },
    };
};

export default Home;
