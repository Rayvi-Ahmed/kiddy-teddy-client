import G1 from '../../assets/Images/G-1.jpg'
import G2 from '../../assets/Images/G-2.jpg'
import G3 from '../../assets/Images/G-3.jpg'
import G4 from '../../assets/Images/G-4.jpg'
import G5 from '../../assets/Images/G-5.jpg'
import G6 from '../../assets/Images/G-6.jpg'
import G7 from '../../assets/Images/G-7.jpg'
import piku from '../../assets/Images/piku.jpeg'

import banner from '../../assets/Images/Banner-3.jpg'

const Gallery = () => {
    return (
        <section className="py-6 bg-pink-800 mt-8 container mx-auto">

            <div className='font-bold text-4xl text-center m-3 text-gray-50'>
                <h1>Toys Gallery</h1>
            </div>

            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <img src={G1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G2} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G3} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G4} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G5} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G6} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={G7} />
                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src={piku} />
                <img src={banner} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
            </div>
        </section>
    );
};

export default Gallery;