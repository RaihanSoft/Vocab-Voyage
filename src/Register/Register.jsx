import { useContext, useState } from "react";
import { Context } from "../Components/Provider/Provider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const [error, setError] = useState("");

  const { handleRegister, manageProfile } = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const image = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conPassword = e.target.Conpassword.value;

    // Validation for photoURL length
    if (image.length > 500) {
      Swal.fire({
        title: "Invalid Photo URL",
        text: "Photo URL is too long. Please provide a shorter URL.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
      return;
    }

    if (password !== conPassword) {
      setError("Password didn't match");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (password.length < 6) {
      setError("Password must contain at least 6 characters");
      return;
    }

    handleRegister(email, password)
      .then(() => {
        // Update profile with name and image
        manageProfile(name, image);

        Swal.fire({
          title: "Registration Successful!",
          text: `Welcome, ${name}! Your account has been created.`,
          icon: "success",
          confirmButtonText: "Proceed",
          timer: 3000,
          timerProgressBar: true,
          customClass: {
            popup: "animate__animated animate__fadeInDown",
          },
        }).then(() => {
          navigate("/");
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Registration Failed",
          text: err.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">
        {/* Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            required
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>

        {/* Photo URL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input
            type="text"
            required
            name="photo"
            placeholder="photo-url"
            className="input input-bordered"
          />
        </div>

        {/* Email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>

        {/* Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative ">
            <input
              className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
              required
              name="password"
              placeholder="password"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <div className="relative ">
            <input
              className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
              required
              name="Conpassword"
              placeholder="Confirm Password"
            />
          </div>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-500 font-semibold">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
