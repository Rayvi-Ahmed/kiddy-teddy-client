import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    const toysInfo = useLoaderData()
    console.log(toysInfo)
    const { _id, name, productName, rating, photoUrl, description, Category, email, price, Quantity } = toysInfo
    return (
        <section className="bg-gray-300 text-gray-700 container mx-auto">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <a rel="noopener noreferrer" href="#" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
                    <img src={photoUrl} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="mb-3 text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{productName}</h3>
                        <span className="text-md dark:text-gray-400"><span className='font-bold text-pink-700'>Price :</span>{`$` + price}</span>
                        <p><span className='font-bold text-pink-700'>Product Description :</span>{description}</p>
                        <p><span className='font-bold text-pink-700'>Rating : </span>{rating} Star</p>
                        <p><span className='font-bold text-pink-700'>Saller name : </span> {name}</p>
                    </div>
                </a>

            </div>
        </section>
    );
};

export default ToyDetails;