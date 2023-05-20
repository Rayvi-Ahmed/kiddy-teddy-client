import UseTitle from "../../Hooks/setTitle";

const Blog = () => {
    UseTitle('Blog')
    return (
        <section className="bg-pink-800 text-gray-100 container mx-auto mt-2 rounded-lg mb-3">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                            <h3 className="text-3xl font-semibold">Welcome to Blog !</h3>
                            <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">MongoDb backend milstone</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

                                <p className="mt-3">An access token is a tiny piece of code that contains a large amount of data. Information about the user, permissions, groups, and timeframes is embedded within one token that passes from a server to a users device.
                                    on the oher hand refresh token is pieces of data that carry just enough information to facilitate the process of determining a users identity or authorizing a user to perform an action.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">2.     Difference between sql and nosql ?</h3>

                                <p className="mt-3">SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a className of DBMs that are non-relational and generally do not use SQL.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">3. What is express js? What is Nest JS ?</h3>

                                <p className="mt-3"> <span className='font-bold'>Express Js :</span> Express is a node js web application framework that provides broad features for building web and mobile applications.

                                    <p> <span className='font-bold block'>Nest Js :</span> Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js.</p>

                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                                <h3 className="text-xl font-semibold tracking-wide">4. What is mongodb aggregate & how does it work ?</h3>

                                <p className="mt-3"> Mongodb Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Blog;