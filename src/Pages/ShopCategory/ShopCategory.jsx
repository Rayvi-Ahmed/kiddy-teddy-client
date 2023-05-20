import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Category from '../Category/Category';


const ShopCategory = () => {
    const [categorys, setCategory] = useState([])
    const [activeButton, setActiveButton] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/alltoys/${activeButton}`)
            .then(res => res.json())
            .then(result => {
                setCategory(result)

            })
    }, [activeButton])

    const handleActiveButton = (activeCategoy) => {
        setActiveButton(activeCategoy)
    }

    return (
        <div className='container mx-auto mt-8'>
            <div className='text-gray-800 text-center mb-6'>
                <h1 className='text-5xl'>Categories</h1>
                <p className='mt-3'>We have many types of animal toy category which as below you can choose & buy for your lovely kid!</p>

            </div>

            <div className='flex gap-4 items-center justify-center'>
                <button onClick={() => handleActiveButton("Teddy Bear")} className="btn btn-active bg-pink-800">Teddy Bear</button>
                <button onClick={() => handleActiveButton("Dinosaur")} className="btn btn-active bg-green-800">Dinosaur</button>
                <button onClick={() => handleActiveButton("Horse")} className="btn btn-active btn-primary">Horse</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                {
                    categorys.map(category => <Category
                        key={category._id}
                        category={category}
                    >
                    </Category>)
                }
            </div>


        </div>
    );
};

export default ShopCategory;