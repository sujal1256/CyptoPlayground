import React from 'react';

const Shimmer = () => {
    const rows = Array(10).fill(0);  // Create 10 rows for the shimmer effect

    return (
        <div className="w-[80%] mx-auto animate-pulse">
            <div className="grid place-content-center gap-0 mx-auto h-[300px] bg-cover text-white p-5 bg-gray-300">
                <h3 className="text-5xl font-semibold bg-gray-400 h-12 w-3/4 mx-auto mb-4"></h3>
            </div>
            <div className="flex flex-col gap-8 h-[70vh] overflow-auto border-4 rounded-3xl border-r-0 ">
                <table className="w-full text-center">
                    <thead className="bg-black text-white">
                        <tr className="h-[40px]">
                            <th>Sr.No.</th>
                            <th className="text-left pl-2">Name</th>
                            <th>Price</th>
                            <th>Percentage (24h)</th>
                            <th>Volume (24h)</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-300">
                        {rows.map((_, index) => (
                            <tr key={index} className="h-[40px]">
                                <td className="bg-gray-200 h-6 w-6 mx-auto"></td>
                                <td className="bg-gray-200 h-6 w-32 mx-auto"></td>
                                <td className="bg-gray-200 h-6 w-20 mx-auto"></td>
                                <td className="bg-gray-200 h-6 w-24 mx-auto"></td>
                                <td className="bg-gray-200 h-6 w-24 mx-auto"></td>
                                <td className="bg-gray-200 h-6 w-24 mx-auto"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Shimmer;
