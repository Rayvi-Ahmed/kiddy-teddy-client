import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";

import { useEffect } from "react";

const Banner2 = () => {
    const { ref, inView } = useInView(
        {
            threshold: 0.2
        }
    )
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }

            })
        }
        if (!inView) {
            animation.start({
                y: '-100vw'
            })
        }

    }, [inView])
    return (
        <div ref={ref}>
            <motion.section className="bg-gray-100 text-gray-800" animate={animation}>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left lg:px-5">

                        <h1 className="text-5xl font-bold leadi sm:text-6xl space-x-5 my-7 ">Kiddy Teddy
                            <span className="text-cyan-600">delight</span>your kid
                        </h1>

                        <p className="lg:my-5">
                            The kiddy teddy is largest toy marketplace platform ,Lets explore our amaizing product & start business from now!
                        </p>

                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-cyan-600 text-gray-50">Buy Now </a>
                            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Explore us</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://img.freepik.com/free-photo/side-view-boy-playing_23-2148551175.jpg?w=900&t=st=1691856263~exp=1691856863~hmac=f941c773d0816ecaa49b4723aedc85125f76326d9202503fcbeda360821b24f0" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                </div>
            </motion.section>


        </div>
    );
};

export default Banner2;