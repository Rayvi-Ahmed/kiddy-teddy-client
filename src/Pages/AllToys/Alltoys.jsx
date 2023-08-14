import React, { useEffect, useState } from 'react';
import ProductData from '../productData/ProductData';
import UseTitle from '../../Hooks/setTitle';


const Alltoys = () => {
    const [allToys, setAlltoys] = useState([])
    const [searchText, setSearchText] = useState('')
    UseTitle('All toys')

    useEffect(() => {
        fetch('https://kiddy-teddy-server.vercel.app/alltoys')
            .then(res => res.json())
            .then(result => {
                setAlltoys(result)
            })
    }, [])

    const handleSearch = () => [
        fetch(`https://kiddy-teddy-server.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then(result => {
                setAlltoys(result)
            })
    ]



    return (
        <div>
            <div className='container mx-auto mt-5' >
                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search product name" className="input input-bordered input-secondary w-full max-w-xs " /> <button onClick={handleSearch} className='btn bg-cyan-500 text-gray-100 mr-4 border-0 hover:bg-pink-400'>Search</button>
            </div>

            <div className="overflow-x-auto w-full container mx-auto mt-5">
                <table className="table w-full">
                    {/* head */}
                    <thead className='w-12 text-start'>
                        <tr>

                            <th>Saller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th >Product Detail</th>
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
        </div>
    );
};

export default Alltoys;