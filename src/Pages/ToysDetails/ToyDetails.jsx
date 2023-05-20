import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    const toysInfo = useLoaderData()
    console.log(toysInfo)
    const { Quantity, name } = toysInfo
    return (
        <div>
            <h1>{Quantity}</h1>
        </div>
    );
};

export default ToyDetails;