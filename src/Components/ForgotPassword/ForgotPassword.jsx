import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Get email from query parameters
    const queryParams = new URLSearchParams(location.search);
    const initialEmail = queryParams.get("email") || "";

    const [email, setEmail] = useState(initialEmail);

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleResetPassword = () => {
        // Redirect user to Gmail
        window.open("https://mail.google.com", "_blank");
        navigate("/"); // Redirect back to homepage after reset
    };

    return (
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
                onChange={handleEmailChange}
            />
            <button
                className="btn btn-primary mt-4"
                onClick={handleResetPassword}
            >
                Reset Password
            </button>
        </div>
    );
};

export default ForgotPassword;
