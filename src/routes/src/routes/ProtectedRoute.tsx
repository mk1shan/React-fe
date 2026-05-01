import type { JSX } from "@emotion/react/jsx-runtime";
import { Navigate } from "react-router-dom";



interface Props{
    children: JSX.Element;
}


function ProtectedRoute({children}:Props){
    const token = localStorage.getItem("accessToken");




    if(!token){
        return <Navigate to="/"/>;
    }

    return children;
}

export default ProtectedRoute;
