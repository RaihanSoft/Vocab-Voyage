import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { Context } from "../Components/Provider/Provider"

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context)

    if(loading){
        return <h1>loading.....</h1>
    }


    if (!user) {
        return <Navigate to="/login" ></Navigate>
    }

    return <div>
        {children}
    </div>


}

export default PrivateRoute
