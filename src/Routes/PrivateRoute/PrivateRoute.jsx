import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <progress className=" container mx-auto progress w-56 text-center my-40"></progress>
    }

    if (user?.email) {
        return children

    }

    return (
        <div>
            {toast.error("You must login first!")}
            <Navigate to='/login' state={{ from: location }} replace></Navigate >;
        </div>
    )

};

export default PrivateRoute;