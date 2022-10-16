import { useContext } from "react";
import { TransactionContext } from "@components/context/TransactionContext";
import { shortenAddress } from "@utils/index";
import { useFetch } from "@utils/hooks";
import Image from "next/image";
import { BiArrowToRight } from "react-icons/bi";
import { RiArrowRightFill } from "react-icons/ri";

type TransactionProps = {
    addressTo: string;
    addressFrom: string;
    timestamp: string;
    message: string;
    keyword: string;
    amount: number;
};

const TransactionCard = ({
    addressTo,
    addressFrom,
    timestamp,
    message,
    keyword,
    amount,
}: {
    addressTo: string;
    addressFrom: string;
    timestamp: string;
    message: string;
    keyword: string;
    amount: number;
}) => {
    const gifUrl = useFetch({ keyword });
    return (
        <div className="bg-[#181918] m-4 flex flex-1 2xl:min-w-[450px] 2xl:max-w-[500px] sm:min-w-[270px] sm:max-w-[300px] flex-col p-3 rounded-md hover:shadow-2xl">
            <div className="flex flex-col items-center w-full mt-3">
                <div className="flex flex-col w-full gap-4 p-2 mb-6">
                    <div className="flex items-center w-full justify-evenly">
                        <a
                            href={`https://goerli.etherscan.io/address/${addressFrom}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-base text-white transition-colors duration-300 hover:text-gray-500"
                        >
                            From: {shortenAddress(addressFrom, 3)}
                        </a>
                        <div className="flex items-center justify-center w-8 h-8 mx-auto text-gray-500 border border-gray-500 rounded-full bg-black/80">
                            <RiArrowRightFill fontSize={16} />
                        </div>
                        <a
                            href={`https://goerli.etherscan.io/address/${addressTo}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-base text-white transition-colors duration-300 hover:text-gray-500"
                        >
                            To: {shortenAddress(addressTo, 3)}
                        </a>
                    </div>
                    <p className="text-base text-white">Amount: {amount} ETH</p>
                    {message && (
                        <p className="mt-5 text-base text-white">
                            Message: {message}
                        </p>
                    )}
                </div>
                <img
                    src={
                        gifUrl ||
                        "https://media4.popsugar-assets.com/files/2013/11/07/832/n/1922398/eb7a69a76543358d_28.gif"
                    }
                    alt="Gif"
                    // layout="fill"
                    className="object-cover w-full h-64 rounded-md shadow-lg 2xl:h-96"
                />
                <div className="px-5 py-3 -mt-5 bg-black shadow-2xl w-max rounded-3xl">
                    <p className="font-bold text-gray-500">{timestamp}</p>
                </div>
            </div>
        </div>
    );
};

const Transactions = () => {
    const { currentAccount, transactions } =
        useContext<any>(TransactionContext);
    return (
        <div className="flex items-center justify-center w-full 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col px-4 py-12 md:p-12">
                {currentAccount ? (
                    <h3 className="my-2 text-3xl text-center text-white">
                        Latest Transactions
                    </h3>
                ) : (
                    <h3 className="my-2 text-3xl text-center text-white">
                        Connect your account to see the latest transactions
                    </h3>
                )}
                <div className="flex flex-wrap items-start justify-center mt-10">
                    {transactions
                        .reverse()
                        .map((transaction: TransactionProps, index: number) => (
                            <TransactionCard key={index} {...transaction} />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Transactions;
