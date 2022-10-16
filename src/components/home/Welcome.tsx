import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "@components/loader";
import React, { useContext } from "react";
import { TransactionContext } from "@components/context/TransactionContext";
import { copyToClipboard, shortenAddress } from "@utils/index";
import { BiCopy } from "react-icons/bi";

const Input = ({
    placeholder,
    name,
    type,
    value,
    handleChange,
}: {
    placeholder: string;
    name: string;
    type: string;
    value: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
    <input
        placeholder={placeholder}
        name={name}
        type={type}
        step="0.0001"
        value={value}
        onChange={handleChange}
        className="w-full p-2 my-2 text-sm text-white bg-transparent border-none rounded-sm outline-none white-glass-morph"
    />
);

// interface IContext {
//     connectWallet: () => void;
//     currentAccount: string;
//     formData: {
//         addressTo: string;
//         amount: string;
//         keyword: string;
//         message: string;
//     };
//     sendTransaction: () => void;
//     handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

const Welcome = () => {
    const {
        connectWallet,
        currentAccount,
        formData,
        sendTransaction,
        handleChange,
        isLoading,
    } = useContext<any>(TransactionContext);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { addressTo, amount, keyword, message } = formData;
        if (!addressTo || !amount || !keyword || !message) {
            alert("Please fill all fields");
            return;
        }
        sendTransaction();
    };
    return (
        <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start justify-between px-4 py-12 mf:flex-row mf:p-20">
                <div className="flex flex-col justify-start flex-1 md:mr-10">
                    <h1 className="py-1 text-3xl text-white sm:text-5xl text-gradient whitespace-nowrap">
                        Send Crypto to
                        <br /> anyone, anywhere
                    </h1>
                    <p className="w-11/12 mt-5 text-base font-light text-left text-white md:w-9/12">
                        Explore the crypto world, Buy and sell cryptocurrencies
                        easily on Vidura.
                    </p>
                    {!currentAccount && (
                        <button
                            type="button"
                            onClick={connectWallet}
                            className="flex text-white text-base font-semibold flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                        >
                            Connect Wallet
                        </button>
                    )}
                    <div className="grid w-full grid-cols-2 mt-10 sm:grid-cols-3">
                        <div className="rounded-tl-2xl min-h-[70px] text-white sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400">
                            Reliability
                        </div>
                        <div className="rounded-tr-2xl md:rounded-none min-h-[70px] text-white sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400">
                            Ethereum
                        </div>
                        <div className="rounded-none md:rounded-tr-2xl min-h-[70px] text-white sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400">
                            Web 3.0
                        </div>
                        <div className="rounded-none md:rounded-bl-2xl min-h-[70px] text-white sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400">
                            Security
                        </div>
                        <div className="rounded-bl-2xl md:rounded-none min-h-[70px] text-white sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400">
                            Low fees
                        </div>
                        <div className="rounded-br-2xl min-h-[70px] text-white sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400">
                            Block Chain
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-start flex-1 w-full mt-10 mf:mt-0">
                    <div className="flex-col items-start justify-end w-full h-40 p-3 my-5 rounded-xl sm:w-72 eth-card white-glass-morph">
                        <div className="flex flex-col justify-between w-full h-full">
                            <div className="flex items-start justify-between">
                                <div className="flex items-center justify-center w-10 h-10 border-2 border-white rounded-full">
                                    <SiEthereum
                                        className="text-white"
                                        fontSize={21}
                                    />
                                </div>
                                <BsInfoCircle
                                    fontSize={17}
                                    className="text-white"
                                />
                            </div>
                            <div>
                                <div
                                    className="flex items-center gap-3 text-sm font-light text-white transition-opacity duration-300 cursor-pointer hover:text-white/80"
                                    onClick={() =>
                                        copyToClipboard(currentAccount)
                                    }
                                >
                                    <p>{shortenAddress(currentAccount, 3)}</p>
                                    <BiCopy fontSize={14} />
                                </div>
                                <p className="mt-1 text-lg font-semibold text-white">
                                    Ethereum
                                </p>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center justify-start w-full p-5 sm:w-96 blue-glass-morph"
                    >
                        <Input
                            placeholder="Address To"
                            name="addressTo"
                            type="text"
                            value={formData.addressTo}
                            handleChange={handleChange}
                        />
                        <Input
                            placeholder="Amount (ETH)"
                            name="amount"
                            type="number"
                            value={formData.amount}
                            handleChange={handleChange}
                        />
                        <Input
                            placeholder="Keyword (Gif)"
                            name="keyword"
                            type="text"
                            value={formData.keyword}
                            handleChange={handleChange}
                        />
                        <Input
                            placeholder="Enter Message"
                            name="message"
                            type="text"
                            value={formData.message}
                            handleChange={handleChange}
                        />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <button
                                className="text-white w-full mt-2 border p-2 border-[#3d4f7c] rounded-full outline-none hover:bg-white/10 transition-colors duration-300"
                                type="submit"
                            >
                                Send Now
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
