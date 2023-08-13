import { useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import Category from '../Category/Category';
import Aos from 'aos';
import 'aos/dist/aos.css'


const ShopCategory = () => {
    const [categorys, setCategory] = useState([])
    const [activeButton, setActiveButton] = useState('')
    console.log(categorys)

    useEffect(() => {
        Aos.init({ duration: 2000 })
        fetch(`https://kiddy-teddy-server.vercel.app/alltoys/${activeButton}`)
            .then(res => res.json())
            .then(result => {
                setCategory(result)
                console.log(result)

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


            <div className="flex items-center -mx-4 space-x-2 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-800 dark:text-gray-100">
                <a onClick={() => handleActiveButton("Teddy Bear")} rel="noopener noreferrer" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-pink-700 text-pink-400">Teddy Bear</a>
                <a onClick={() => handleActiveButton("Dinosaur")} rel="noopener noreferrer" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-green-700 text-green-400">Dinosaur</a>
                <a onClick={() => handleActiveButton("Horse")} rel="noopener noreferrer" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-orange-700 text-orange-500">Horse</a>
                <a onClick={() => handleActiveButton("Combo Pack")} rel="noopener noreferrer" className="flex items-center flex-shrink-0 px-5 py-2 border-b-4 border-gray-700 dark:text-gray-400">Combo Pack</a>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 mt-8' data-aos="fade-right">
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