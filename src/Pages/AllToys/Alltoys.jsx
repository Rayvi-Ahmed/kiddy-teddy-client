import React, { useEffect, useState } from 'react';
import ProductData from '../productData/ProductData';

const Alltoys = () => {
    const [allToys, setAlltoys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then(res => res.json())
            .then(result => {
                setAlltoys(result)
            })
    }, [])

    return (
        <div className="overflow-x-auto w-full container mx-auto mt-5">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>

                        <th>Saller Name</th>
                        <th>Toy Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Product Detail</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allToys.map(toy => <ProductData
                            key={toy._id}
                            toy={toy}

                        ></ProductData>)
                    }

                </tbody>



            </table>
        </div>
    );
};

export default Alltoys;