import banner1 from '../../../assets/Images/Banner-1.jpg'
import banner2 from '../../../assets/Images/Banner-2.jpg'
import banner3 from '../../../assets/Images/Banner-3.jpg'


const Banner = () => {
    return (
        <div className='container mx-auto mt-3'>
            <div className="carousel w-full rounded-lg h-[500px] ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" />
                    <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#431c3f] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-1/2 pl-6'>
                            <h1 className='text-6xl font-bold '>Make your kid like tarzan with animal toys</h1>
                            <p className='text-lg'>This is a happy kid carnival plannet based on anmal toys shop, visit our site & buy toys for your kid</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3 mt-2">
                        <a href="#slide4" className="btn btn-circle bg-pink-800">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" />
                    <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#431c3f] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-1/2 pl-6'>
                            <h1 className='text-6xl font-bold '>Make your kid like tarzan with animal toys</h1>
                            <p className='text-lg'>This is a happy kid carnival plannet based on anmal toys shop, visit our site & buy toys for your kid</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                        <a href="#slide1" className="btn btn-circle bg-pink-800">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" />
                    <div className="absolute flex items-center left-0 top-0 h-full bg-gradient-to-r from-[#431c3f] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 w-1/2 pl-6'>
                            <h1 className='text-6xl font-bold '>Make your kid like tarzan with animal toys</h1>
                            <p className='text-lg'>This is a happy kid carnival plannet based on anmal toys shop, visit our site & buy toys for your kid</p>

                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-0 gap-3">
                        <a href="#slide2" className="btn btn-circle bg-pink-800">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;