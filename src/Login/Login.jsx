import { useContext, useState } from "react"
import { Context } from "../Components/Provider/Provider"
import { NavLink } from "react-router-dom"



const Login = () => {
    const { handleGoogleLogin, handleLogin, } = useContext(Context)

    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        handleLogin(email, password)
            .then(() => { })
            .catch(err => {
                setError(err.message)
            })
    }
    return (
        <div >

            {/* form  start  */}
            <div>
                <form onSubmit={handleSubmit} className="card-body">


                    {/* email  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="email" className="input input-bordered" />
                    </div>

                    {/* password  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <div className="relative ">
                            <input

                                className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
                                // type={showP ? "text" : "password"}
                                required name="password"
                                placeholder="password"
                            />
                            {/* <span className="absolute top-3 right-2" onClick={() => setShowP(!showP)}>
              {
                showP ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
              }
            </span> */}
                        </div>
                        {/* {passwordError && <p className="text-red-500">{passwordError}</p>} */}

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>


                    {
                        error && (
                            <p className="text-red-500">
                                {error.slice(error.indexOf('/') + 1, error.indexOf(')'))}
                            </p>
                        )
                    }
    


                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-blue-500 font-semibold">Login</button>
                    </div>


                </form>


            </div>

            {/* form  end */}







            <button className="text-center font-bold text-lg flex justify-center items-center my-10  btn " onClick={handleGoogleLogin}  >GoogleLogin</button>

            new to the website? please <NavLink to={'/register'} >register</NavLink>

            {/* <button onClick={handleLogOut} >LogOut</button> */}
        </div>
    )
}

export default Login
