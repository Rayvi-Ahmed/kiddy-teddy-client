import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysData from '../MyToysData/MyToysData';
import { toast } from 'react-hot-toast';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setMyToys(result)
            })

    }, [user])


    return (
        <div>
            <div className='container mx-auto mt-5' >
                <input type="text" placeholder="Search product name" className="input input-bordered input-secondary w-full max-w-xs " /> <button className='btn bg-pink-800 text-gray-100 mr-4 border-0 hover:bg-pink-400'>Search</button>
            </div>

            <div className="overflow-x-auto w-full container mx-auto mt-5 mb-8">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Saller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className='text-center'>description</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {myToys ? myToys.map(mytoy => <MyToysData
                            key={mytoy._id}
                            mytoy={mytoy}

                        ></MyToysData>) : toast.error('No data found!')

                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default MyToys;