
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { _id, name, productName, rating, photoUrl, description, Category, email, price, Quantity } = category

    return (
        <div>
            <div className="card h-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={photoUrl} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{productName}</h2>
                    <p>Price : {price}</p>
                    <p>Rating : {rating}</p>

                    <div className="card-actions">
                        <Link to={`/toyDetails/${_id}`}>
                            <button className="btn bg-pink-800">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;