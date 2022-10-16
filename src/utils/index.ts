export const shortenAddress = (address: string, chars = 4): string => {
    return `${address.substring(0, chars + 2)}...${address.substring(
        address.length - chars - 1
    )}`;
};

export const copyToClipboard = (text: string): boolean => {
    navigator.clipboard.writeText(text);
    alert(`${text} \nCopied to clipboard`);
    return true;
};
