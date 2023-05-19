import React from 'react';
import { Link } from 'react-router-dom';

const MyToysData = ({ mytoy, handleToyDelete }) => {
    const { _id, name, productName, description, Category, email, price, Quantity } = mytoy
    return (

        <tr className='text-center'>

            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <td>
                {productName}

            </td>
            <td>
                {Category}

            </td>
            <td>
                {'$' + price}

            </td>
            <td>
                {Quantity}

            </td>
            <td>
                {description}

            </td>
            <th>
                <Link to={'/updateToys'}>
                    <button className="btn border-0 hover:bg-pink-400 bg-pink-800 text-gray-100 btn-sm">Edit</button>
                </Link>
            </th>
            <th>
                <button onClick={() => handleToyDelete(_id)} className="btn bg-red-600 btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
        </tr>

    );
};

export default MyToysData;