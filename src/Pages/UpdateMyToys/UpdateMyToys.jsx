import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateMyToys = () => {

    const { user } = useContext(AuthContext)
    const allToys = useLoaderData()
    // const { _id, price, description, Quantity } = allToys

    const handleProductUpdate = event => {
        event.preventDefault()
        const form = event.target
        const Quantity = form.Quantity.value;
        const price = form.price.value;
        const description = form.description.value
        form.reset()
        // console.log(name, email, photoUrl, Quantity, productName, price, Category, rating, description)

        const UpdateProduct = {
            price,
            description,
            Quantity
        }
        console.log(UpdateProduct)

        fetch(`http://localhost:5000/mytoys/${allToys._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(UpdateProduct)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })

    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-gray-800">Add product</h2>

            <form className="container mx-auto mb-4" onSubmit={handleProductUpdate}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" defaultValue="" placeholder="" name="Quantity" className="input input-bordered" />
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="text" defaultValue="" placeholder="$ price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-secondary" placeholder="Write a short description"></textarea>

                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-pink-800 btn-block" type="submit" value="Update product" />
                </div>
            </form>

        </div>
    );
};

export default UpdateMyToys;