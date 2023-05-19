import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {

    const details = useLoaderData()
    const { name, Quantity } = details
    console.log(details)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{Quantity}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;