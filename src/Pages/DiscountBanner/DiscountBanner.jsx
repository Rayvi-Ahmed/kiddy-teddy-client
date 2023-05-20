import React from 'react';

const DiscountBanner = () => {
    return (
        <div className="p-6 py-12 bg-pink-700 text-gray-100 container mx-auto mt-7">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <h2 className="text-center text-6xl tracking-tighter font-bold">New Araival!!

                    </h2>
                    <div className="space-x-2 text-center py-2 lg:py-0">
                        <span>Buy your kid happiness from here:</span>
                        <span className="font-bold text-lg">KIDDY TEDDY</span>
                    </div>
                    <button className="btn btn-outline btn-accent">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountBanner;