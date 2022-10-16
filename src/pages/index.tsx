import type { NextPage } from "next";
import Head from "next/head";
import Services from "@components/home/Services";
import Transactions from "@components/home/Transactions";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Home: NextPage = () => {
    const imageUrl = "http://localhost:3000/api/og";
    return (
        <div className="text-lg">
            <Head>
                <title>Vidura the fastest crypto exchange platform!</title>
                <meta
                    name="description"
                    content="The fastest and most secure crypto exchange platform."
                />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://vidura.io/" />
                <meta
                    property="og:title"
                    content="Vidura the fastest crypto exchange platform!"
                />
                <meta
                    property="og:description"
                    content="The fastest and most secure crypto exchange platform."
                />
                <meta property="og:image" content={BASE_URL + '/images/og.png'} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://vidura.io/" />
                <meta
                    property="twitter:title"
                    content="Vidura the fastest crypto exchange platform!"
                />
                <meta
                    property="twitter:description"
                    content="The fastest and most secure crypto exchange platform."
                />
                <meta property="twitter:image" content={BASE_URL + '/images/og.png'} />
            </Head>

            <main>
                <Services />
                <Transactions />
            </main>
        </div>
    );
};

export default Home;
