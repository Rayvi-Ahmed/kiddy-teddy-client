import React from 'react';

const MyToysData = ({ mytoy }) => {
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
                <button className="btn border-0 hover:bg-pink-400 bg-pink-800 text-gray-100 btn-sm">Edit</button>
            </th>
            <th>
                <button className="btn border-0 hover:bg-pink-400 bg-pink-800 text-gray-100 btn-sm">Delete</button>
            </th>
        </tr>

    );
};

export default MyToysData;