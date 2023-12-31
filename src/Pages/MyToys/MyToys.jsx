import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToysData from '../MyToysData/MyToysData';
import { toast } from 'react-hot-toast';
import { data } from 'autoprefixer';
import UseTitle from '../../Hooks/setTitle';

const MyToys = () => {

    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    // const [toysModal, setToysModal] =
    UseTitle('My Toys')

    useEffect(() => {
        fetch(`https://kiddy-teddy-server.vercel.app/mytoys/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setMyToys(result)
            })

    }, [myToys])

    const handleToyDelete = (id) => {
        const proceed = confirm("are you sure to delete ?")
        if (proceed) {
            fetch(`https://kiddy-teddy-server.vercel.app/mytoys/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
            if (data.deletedCount > 0) {
                alert('delete successfully')
                const existing = myToys.filter(ty => ty._id !== id)
                setMyToys(existing)
            }
        }
    }

    return (
        <div>


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
                            handleToyDelete={handleToyDelete}
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