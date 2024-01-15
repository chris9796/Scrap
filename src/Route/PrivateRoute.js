import React from "react";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import UserHome from "../pages/UserHome";

const PrivateRoute = ({ authenticate }) => {
    const location = useLocation();

    return authenticate ? <UserHome /> : <Navigate to="/login" replace state={{ to: location }} />;
};

export default PrivateRoute;
