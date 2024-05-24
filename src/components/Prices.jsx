import React, { useState, useEffect } from 'react';
import PriceRow from './PriceRow';
import Shimmer from './Shimmer';

const Prices = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Fetch error: ", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    };

    if (isLoading) {
        return <Shimmer />;
    }

    if (isError || !data || data.length === 0) {
        return (
            <div className="w-[80%] mx-auto text-center">
                <div className="grid place-content-center gap-0 mx-auto h-[300px] bg-cover text-white p-5 bg-[url(https://www.imf.org/-/media/Images/IMF/Blog/Articles/Hero/2023/June/BLOG-2099x600-FAD-Crypto-taxation-Da-kuk-iStock-by-Getty-Images-iStock-1304093999.ashx)]">
                    <h3 className="text-5xl font-semibold">Top Crypto Currencies</h3>
                </div>
                <p className="text-xl mt-10">Failed to load data. Please try again later.</p>
            </div>
        );
    }

    return (
        <>
            <div className='w-[80%] mx-auto'>
                <div className='grid place-content-center gap-0 mx-auto h-[300px] bg-cover text-white p-5 bg-[url(https://www.imf.org/-/media/Images/IMF/Blog/Articles/Hero/2023/June/BLOG-2099x600-FAD-Crypto-taxation-Da-kuk-iStock-by-Getty-Images-iStock-1304093999.ashx)]'>
                    <h3 className='text-5xl font-semibold'>Top Crypto Currencies</h3>
                </div>
                <div className='flex flex-col gap-8 h-[100vh] overflow-auto border-4 rounded-3xl border-r-0'>
                    <table className='w-full text-center'>
                        <thead className='bg-black text-white'>
                            <tr className='h-[40px]'>
                                <th>Sr.No.</th>
                                <th className='text-left pl-2'>Name</th>
                                <th>Price</th>
                                <th>Percentage (24h)</th>
                                <th>Volume (24h)</th>
                                <th>Market Cap</th>
                            </tr>
                        </thead>
                        <tbody className='bg-gray-300'>
                            {data.map((coin, index) => (
                                <PriceRow key={coin.id} index={index} {...coin} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Prices;
    