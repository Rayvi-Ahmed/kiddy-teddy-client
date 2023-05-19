import React from 'react';
import { Link } from 'react-router-dom';

const ProductData = ({ toy }) => {
    const { _id, name, productName, description, Category, email, price, Quantity } = toy


    return (
        <tr>

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
            <th>
                <Link to={`/details/${_id}`}>
                    <button className="btn border-0 hover:bg-pink-400 bg-pink-800 text-gray-100 btn-sm">Details</button>

                </Link>
            </th>
        </tr>
    );
};

export default ProductData;