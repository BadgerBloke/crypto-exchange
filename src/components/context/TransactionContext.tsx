import {
    useState,
    useEffect,
    createContext,
    ReactNode,
    ChangeEvent,
} from "react";
import { ethers } from "ethers";
import { contractAbi, contractAddress } from "@utils/constants";

declare global {
    interface Window {
        ethereum: any;
    }
}

export const TransactionContext = createContext({});

const getEthereumContract = () => {
    const { ethereum } = window;

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
    );

    return transactionContract;
};

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
    const [currentAccount, setCurrentAccount] = useState<string>("");
    const [formData, setFormData] = useState({
        addressTo: "",
        amount: "",
        keyword: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [transactionCount, setTransactionCount] = useState<number | string>(
        0
    );
    const [transactions, setTransactions] = useState<{
        addressTo: string;
        addressFrom: string;
        timestamp: string;
        message: string;
        keyword: string;
        amount: number;
    }[]>([]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const getAllTransactions = async () => {
        const { ethereum } = window;
        try{
            if (!ethereum) return alert("Please install MetaMask");
            const transactionContract = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();
            const structuredTransactions = availableTransactions.map((transaction: any) => ({
                addressFrom: transaction.sender,
                addressTo: transaction.receiver,
                amount: parseInt(transaction.amount._hex) / (10 ** 18),
                keyword: transaction.keyword,
                message: transaction.message,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
            }));
            setTransactions(structuredTransactions);
            console.log(structuredTransactions);
        } catch (error) {
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async () => {
        const { ethereum } = window;
        try {
            if (!ethereum) {
                alert("Make sure you have metamask installed!");
                return;
            }

            const accounts: any = await ethereum.request({
                method: "eth_accounts",
            });
            if (accounts && accounts.length > 0) {
                const account = accounts[0];
                setCurrentAccount(account);
                getAllTransactions();
            }
            console.log("Metamask account", accounts);
        } catch (error) {
            console.log(error);
            throw new Error("Error while checking if wallet is connected");
        }
    };

    const checkIfTransactionsExist = async () => {
        const transactionContract = getEthereumContract();
        try {
            const count = await transactionContract.getTransactionCount();
            window.localStorage.setItem("transactionCount", count.toNumber());
            setTransactionCount(count.toNumber());
        } catch (error) {
            console.log('Check If Transactions Exist', error);
        }
    }

    const connectWallet = async () => {
        const { ethereum } = window;
        try {
            if (!ethereum)
                return alert("Make sure you have metamask installed!");
            const accounts: any = await ethereum.request({
                method: "eth_requestAccounts",
            });

            if (accounts && accounts.length > 0) {
                setCurrentAccount(accounts[0]);
                console.log("Connected", accounts[0]);
            } else {
                alert("Something went wrong");
            }
        } catch (err) {
            console.log(err);
            throw new Error("No ethereum object found");
        }
    };

    const sendTransaction = async () => {
        const { ethereum } = window;
        try {
            if (!ethereum)
                return alert("Make sure you have metamask installed!");
            const transactionContract = getEthereumContract();
            const { addressTo, amount, keyword, message } = formData;
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [
                    {
                        from: currentAccount,
                        to: addressTo,
                        gas: "0x5208", // 21000 GWEI
                        value: parsedAmount._hex,
                    },
                ],
            });

            const transactionHash = await transactionContract.addToBlockchain(
                addressTo,
                parsedAmount,
                message,
                keyword
            );

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount =
                await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());
        } catch (err: any) {
            alert(err.message);
        }
    };

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionsExist();
        setTransactionCount(localStorage.getItem("transactionCount") || 0);
    }, []);
    return (
        <TransactionContext.Provider
            value={{
                connectWallet,
                currentAccount,
                formData,
                sendTransaction,
                handleChange,
                transactions,
                transactionCount,
                isLoading,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
};
