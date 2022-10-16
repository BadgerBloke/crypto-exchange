import { useEffect, useState } from "react";

const GIPHY_API = process.env.NEXT_PUBLIC_GIPHY_API;

export const useFetch = ({ keyword }: { keyword: string }) => {
    const [gifUrl, setGifUrl] = useState<string>("");

    const fetchGifs = async () => {
        try {
            const response = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API}&q=${keyword
                    .split(" ")
                    .join("")}`
            );
            const { data } = await response.json();
            setGifUrl(data[0]?.images?.downsized_medium?.url || "");
        } catch (error) {
            setGifUrl(
                "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
            );
        }
    };

    useEffect(() => {
        if (keyword) fetchGifs();
    }, [keyword]);
    return gifUrl;
};
