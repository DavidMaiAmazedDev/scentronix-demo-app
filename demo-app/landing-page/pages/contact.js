import Layout from '../components/layout';
import Alert from '../components/alert';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
export default function Contact() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Contact</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
                <h1>Contact</h1>
                <Alert type='error' >
                    from contact Page   
                </Alert>
            </Layout>
        </>
    );
}