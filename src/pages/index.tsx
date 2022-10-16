import type { NextPage } from "next";
import Head from "next/head";
import Services from "@components/home/Services";
import Transactions from "@components/home/Transactions";

const Home: NextPage = () => {
    return (
        <div className="text-lg">
            <Head>
                <title>Vidura the fastest crypto exchange platform!</title>
            </Head>

            <main>
                <Services />
                <Transactions />
            </main>
        </div>
    );
};

export default Home;
