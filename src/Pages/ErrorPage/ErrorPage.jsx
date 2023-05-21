import React from 'react';
import { Link } from 'react-router-dom';
import UseTitle from '../../Hooks/setTitle';
import error from '../../assets/Images/error-1.png'

const ErrorPage = () => {
    UseTitle('404 error')
    return (
        <section className="flex items-center p-16 bg-pink-800 text-white">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <img src={error} alt="" />
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-pink-400 text-gray-100'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;