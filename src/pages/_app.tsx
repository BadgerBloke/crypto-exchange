import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@components/include/Navbar";
import Footer from "@components/include/Footer";
import { useRouter } from "next/router";
import Welcome from "@components/home/Welcome";
import { TransactionProvider } from "@components/context/TransactionContext";

function MyApp({ Component, pageProps }: AppProps) {
    const route = useRouter();
    return (
        <TransactionProvider>
            <div className="min-h-screen">
                {route.pathname === "/" ? (
                    <div className="gradient-bg-welcome">
                        <Navbar />
                        <Welcome />
                    </div>
                ) : (
                    <Navbar />
                )}
                <Component {...pageProps} />
                <Footer />
            </div>
        </TransactionProvider>
    );
}

export default MyApp;
