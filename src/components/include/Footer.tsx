import logoImage from "@assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-between w-full p-4 md:justify-center gradient-bg-footer">
            <div className="flex flex-col items-center justify-between w-full my-4 sm:flex-row">
                <div className="flex flex-[0.5] justify-center items-center">
                <div className="w-[128px]">
                    <Image src={logoImage} alt="logo" layout="responsive" />
                </div>
                </div>
                <div className="flex flex-wrap items-center flex-1 w-full mt-5 justify-evenly sm:mt-0">
                    <Link href="/">
                        <a className="mx-2 text-base text-center text-white">
                            Market
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="mx-2 text-base text-center text-white">
                            Exchange
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="mx-2 text-base text-center text-white">
                            Tutorials
                        </a>
                    </Link>
                    <Link href="/">
                        <a className="mx-2 text-base text-center text-white">
                            Wallets
                        </a>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-5">
                <p className="text-sm text-center text-white">Come join us!</p>
                <p className="text-sm text-center text-white">info@vidura.io</p>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
            <div className="sm:w-[90%] w-full justify-between items-center flex mt-3">
                <p className="text-sm text-center text-white">@Vidura 2022</p>
                <p className="text-sm text-center text-white">All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
