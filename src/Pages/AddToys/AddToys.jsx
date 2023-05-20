import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import UseTitle from "../../Hooks/setTitle";

const AddToys = () => {
    const { user } = useContext(AuthContext)
    UseTitle('addtoys')

    const handleProductAdd = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.url.value;
        const productName = form.productName.value;
        const Quantity = form.Quantity.value;
        const price = form.price.value;
        const Category = form.Category.value;
        const rating = form.rating.value;
        const description = form.description.value
        form.reset()
        // console.log(name, email, photoUrl, Quantity, productName, price, Category, rating, description)

        const addProduct = {
            name,
            email,
            photoUrl,
            productName,
            price,
            Category,
            rating,
            description,
            Quantity
        }
        console.log(addProduct)

        fetch('http://localhost:5000/postToys', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if (result.acknowledged
                    == true) {
                    toast.success('Product successfully added')
                } else {
                    toast.error("no product added")
                }
            })


    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-gray-800">Add product</h2>

            <form className="container mx-auto mb-4" onSubmit={handleProductAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Saller Name</span>
                        </label>
                        <input type="text" value={user?.displayName} placeholder="Write saller name" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input type="text" defaultValue="" placeholder="Write the product name" name="productName" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input type="number" defaultValue="" placeholder="" name="Quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="url" className="input input-bordered" />

                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Saller Email</span>
                        </label>
                        <input type="email" name="email" value={user?.email} placeholder="Write the saller email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="text" defaultValue="" placeholder="$ price" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="Category" className="select select-bordered w-full max-w-xs">
                            <option>Teddy Bear</option>
                            <option>Horse</option>
                            <option>Dinosaur</option>
                        </select>

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input name="rating" type="text" defaultValue="" placeholder="Rating" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" className="textarea textarea-secondary" placeholder="Write a short description"></textarea>

                    </div>

                </div>
                <div className="form-control mt-6">
                    <input className="btn bg-pink-800 btn-block" type="submit" value="Ad product" />
                </div>
            </form>

        </div>
    );
};

export default AddToys;