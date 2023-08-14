
import { Link } from 'react-router-dom';
const Category = ({ category }) => {
    const { _id, productName, photoUrl, description, price, } = category

    return (
        <div>
            <div className="shadow-lg bg-gray-50 text-gray-800 my-5 hover:scale-110 transition">
                <img src={photoUrl} alt="" className="object-cover object-center hover:scale-150 transition lg:mx-auto lg:w-[200px] rounded-t-md h-[180px] bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2 lg:h-[180px]">
                        <h2 className="text-3xl font-semibold tracki">{productName}</h2>
                        <p className="text-gray-800">Price ${price}</p>
                        <p className="text-gray-800">{description}</p>
                    </div>
                    <Link
                        to={`toyDetails/${_id}`}
                    >
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md bg-cyan-600 text-gray-50">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Category;