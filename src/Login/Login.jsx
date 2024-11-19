import { useContext, useState } from "react";
import { Context } from "../Components/Provider/Provider";
import { NavLink, useLocation, useNavigate, Link } from "react-router-dom";

import Swal from "sweetalert2";
import "animate.css";

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    // Google Login Handler
    const handleGoogle = () => {
        handleGoogleLogin()
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Welcome back!",
                    text: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: "animate__animated animate__backInRight",
                        icon: "animate__animated animate__zoomIn",
                        title: "animate__animated animate__fadeInDown",
                        content: "animate__animated animate__lightSpeedInRight",
                    },
                });
                const from = location.state?.from || "/";
                navigate(from);
            });
    };

    // Form Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault();
        const password = e.target.password.value;

        handleLogin(email, password)
            .then(() => {
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Welcome back!",
                    text: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: "animate__animated animate__backInRight",
                        icon: "animate__animated animate__zoomIn",
                        title: "animate__animated animate__fadeInDown",
                        content: "animate__animated animate__lightSpeedInRight",
                    },
                });

                const from = location.state?.from || "/";
                navigate(from);
            })
            .catch((err) => {
                setError(err.message);
            });
    };

    return (
        <div>
            {/* Login Form */}
            <div>
                <form onSubmit={handleSubmit} className="card-body">
                    {/* Email Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
                                required
                            />
                        </div>
                        <label className="label">
                            {/* Forgot Password Link */}
                            <Link
                                to={`/forgot-password?email=${email}`}
                                className="label-text-alt link link-hover"
                            >
                                Forgot Password?
                            </Link>
                        </label>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500">
                            {error.slice(error.indexOf("/") + 1, error.indexOf(")"))}
                        </p>
                    )}

                    {/* Submit Button */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-blue-500 font-semibold">
                            Login
                        </button>
                    </div>
                </form>
            </div>

            {/* Google Login */}
            <button
                className="text-center font-bold text-lg flex justify-center items-center my-10 btn"
                onClick={handleGoogle}
            >
                Google Login
            </button>

            {/* Registration Link */}
            <p>
                New to the website? Please{" "}
                <NavLink to={"/register"}>Register</NavLink>
            </p>
        </div>
    );
};

export default Login;
