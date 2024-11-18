import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { Context } from "../Components/Provider/Provider"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const { user, loading } = useContext(Context)

    if (loading) {
        return <h1>loading.....</h1>
    }


    if (!user) {
        return <Navigate state={{from:location.pathname}} to="/login" ></Navigate>
    }

    return children



}

export default PrivateRoute
