import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/setTitle';

const Login = () => {

    const { providerLogin, signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    UseTitle('Login')

    const from = location.state?.from?.pathname || "/";


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log("handle error", email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("Login Success");
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                toast.error("Can't login! Please try again.")
            })
            .finally(() => {
                setLoading(false);
            })
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
        <div className="w-full mx-auto max-w-md m-5 p-4 rounded-md shadow sm:p-8 bg-cyan-700 text-gray-800">
            <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
            <p className="text-sm text-center text-gray-800">Are you new this website ?
                <Link to="/signUp" rel="noopener noreferrer" className="focus:underline hover:underline">Please Register here</Link>
            </p>
            <div className="my-6 space-y-4">
                <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-pink-400 hover:border-violet-500">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                    </svg>
                    <p>Login with Google</p>
                </button>

            </div>
            <div className="flex items-center w-full me-5">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg p-12 rounded  bg-cyan-500  text-gray-100" noValidate="" action="">
                <label htmlFor="email" className="block text-left text-white text-sm font-bold mb-4">Your Email</label>

                <input id="email" name="email" type="text" placeholder='Your Email' className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

                <label htmlFor="password" className="block text-left text-white text-sm font-bold mb-4">Password</label>

                <input id="password" name="password" placeholder='Your Password' type="password" className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" required />

                <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded hover:bg-pink-400 bg-gray-300 text-gray-800 btn-block">Log In</button>

            </form>
        </div>
    );
};

export default Login;