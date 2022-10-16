import Image from "next/image";
import logoImage from "@assets/images/logo.png";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { TransactionContext } from "@components/context/TransactionContext";

const NavbarItem = ({
    children,
    href,
    className,
}: {
    children: React.ReactNode;
    href: string;
    className: string;
}) => {
    return (
        <li className={`cursor-pointer mx-4 ${className}`}>
            <Link href={href}>{children}</Link>
        </li>
    );
};
const Navbar = () => {
    const { connectWallet, currentAccount } =
        useContext<any>(TransactionContext);
    const [toggleMenu, setToggleMenu] = useState<boolean>(false);
    return (
        <nav className="flex items-center justify-between w-full p-4 md:justify-center">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <div className="max-w-[128px]">
                    <Image src={logoImage} alt="logo" layout="responsive" />
                </div>
            </div>
            <ul className="flex-row items-center justify-between flex-initial hidden text-white list-none md:flex">
                {["Home", "Market", "Exchange", "Tutorials", "Wallets"].map(
                    (item, index) => (
                        <NavbarItem
                            href="/"
                            className="text-white hover:text-gray-300"
                            key={index + item}
                        >
                            {item}
                        </NavbarItem>
                    )
                )}
                {!currentAccount && (
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="bg-[#2952e3] py-2 px-7 rounded-full hover:bg-[#2546bd]"
                    >
                        Login
                    </button>
                )}
            </ul>
            <div className="relative flex">
                {toggleMenu ? (
                    <AiOutlineClose
                        fontSize={28}
                        className="text-white cursor-pointer md:hidden"
                        onClick={() => setToggleMenu(false)}
                    />
                ) : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white cursor-pointer md:hidden"
                        onClick={() => setToggleMenu(true)}
                    />
                )}
                {toggleMenu && (
                    <ul className="fixed top-0 z-10 p-3 -right-2 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glass-morph text-white animate-slide-in">
                        <li className="w-full my-2 text-xl">
                            <AiOutlineClose
                                onClick={() => setToggleMenu(false)}
                            />
                        </li>
                        {[
                            "Home",
                            "Market",
                            "Exchange",
                            "Tutorials",
                            "Wallets",
                        ].map((item, index) => (
                            <NavbarItem
                                href="/"
                                className="my-2 text-lg hover:text-gray-300"
                                key={index + item}
                            >
                                {item}
                            </NavbarItem>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
