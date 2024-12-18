import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CaptainProtectedRoute = ({ children }) => {

    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    useEffect(() => {
        if (!token) {
            return navigate("/captainSignup");
        }
    }, [token])
    
    return children;
};

export default CaptainProtectedRoute;