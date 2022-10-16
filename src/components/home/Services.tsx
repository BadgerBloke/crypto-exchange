import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({
    color,
    title,
    icon,
    subTitle,
}: {
    color: string;
    title: string;
    icon: JSX.Element;
    subTitle: string;
}) => {
    return (
        <div className="flex flex-row items-center justify-start p-3 m-2 cursor-pointer white-glass-morph hover:shadow-xl">
            <div
                className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}
            >
                {icon}
            </div>
            <div className="flex flex-col flex-1 ml-5">
                <h1 className="mt-2 text-lg text-white">{title}</h1>
                <p className="mt-2 text-sm text-white md:w-9/12">{subTitle}</p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full md:flex-row gradient-bg-services">
            <div className="flex flex-col items-center justify-between px-4 py-12 mf:flex-row md:p-20">
                <div className="flex flex-col items-start justify-start flex-1">
                    <h1 className="py-2 text-3xl text-white sm:text-5xl text-gradient">
                        Services that we
                        <br />
                        are committed to
                    </h1>
                </div>
            </div>
            <div className="flex flex-col items-center justify-start flex-1">
                <ServiceCard
                    color="bg-[#2952E3]"
                    title="Security Guaranteed"
                    icon={
                        <BsShieldFillCheck
                            className="text-white"
                            fontSize={21}
                        />
                    }
                    subTitle="Security is our top priority. We use the latest technology to ensure your data is safe and we always maintain privacy."
                />
                <ServiceCard
                    color="bg-[#8945f8]"
                    title="Best Exchange Rates"
                    icon={
                        <BiSearchAlt
                            className="text-white"
                            fontSize={21}
                        />
                    }
                    subTitle="Security is our top priority. We use the latest technology to ensure your data is safe and we always maintain privacy."
                />
                <ServiceCard
                    color="bg-[#F84550]"
                    title="Fastest Transactions"
                    icon={
                        <RiHeart2Fill
                            className="text-white"
                            fontSize={21}
                        />
                    }
                    subTitle="Security is our top priority. We use the latest technology to ensure your data is safe and we always maintain privacy."
                />
            </div>
        </div>
    );
};

export default Services;
