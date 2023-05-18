import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddToys = () => {
    const user = useContext(AuthContext)

    const handleProductAdd = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        console.log(name, email, date)
        form.reset()

        const added = {
            name,
            email,
            date,
        }
        console.log(added)

    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center text-gray-800">Add product</h2>

            <form className="container mx-auto mb-4" onSubmit={handleProductAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} placeholder="text" name="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" />

                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name="price" type="text" defaultValue="" placeholder="number" className="input input-bordered" />

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