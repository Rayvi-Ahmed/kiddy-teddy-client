import React from 'react';
import UseTitle from '../../Hooks/setTitle';

const ToyDetailsCard = ({ detail }) => {
    UseTitle('Toy Details')
    console.log(detail)
    const { name, Quantity, price } = detail
    return (
        <div>
            <h1>Price:{price}</h1>
        </div>
    );
};

export default ToyDetailsCard;