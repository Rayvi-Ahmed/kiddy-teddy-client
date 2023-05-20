import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import UseTitle from "../../Hooks/setTitle";

const SignUp = () => {
    const { createUser, providerLogin, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    UseTitle('Sign Up')

    const from = location.state?.from?.pathname || "/";


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, email, password, photoURL);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                toast.success("Successfully Registered");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                form.reset();
                toast.error(error.message);
            });
    };
    const handleGoogleSignIn = () => {
        providerLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    };

    return (
        <div className="w-full max-w-md p-4 m-10 mx-auto rounded-md shadow sm:p-8 bg-pink-800 text-gray-100">

            <h2 className="mb-3 text-3xl font-semibold text-center">Register Your Account</h2>
            <p className="text-sm text-center text-gray-400">Already Have an Account?
                <Link to="/Login" rel="noopener noreferrer" className="focus:underline hover:underline"> Log In</Link>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-pink-400 hover:border-violet-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Register with Google</p>
                </button>

            </div>
            <div className="flex items-center w-full me-5">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>

            <form onSubmit={handleSubmit} noValidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded  bg-pink-700  text-gray-100">
                <label htmlFor="username" className="self-start text-xs font-semibold">Your Name</label>
                <input id="username" name="name" type="text" placeholder="Your Name" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 hover:border-pink-400 hover:ring-violet-400" />
                <label htmlFor="photoURL" className="self-start text-xs font-semibold">Photo URL</label>
                <input id="photoURL" name="photoURL" placeholder='Photo URL' type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 hover:border-pink-400 hover:ring-violet-400" />
                <label htmlFor="email" className="self-start text-xs font-semibold">Your Email</label>
                <input id="email" name="email" placeholder='Your Email' type="text" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 hover:border-pink-400 hover:ring-violet-400" required />
                <label htmlFor="password" className="self-start mt-3 text-xs font-semibold">Password</label>
                <input id="password" name="password" placeholder='Your Password' type="password" className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-gray-900 hover:border-violet-400 hover:ring-violet-400" required />
                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded hover:bg-pink-400 bg-gray-300 text-gray-900">Register</button>

            </form>
        </div>
    );
};

export default SignUp;