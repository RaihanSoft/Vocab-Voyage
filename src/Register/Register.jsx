import { useContext, useState } from "react"
import { Context } from "../Components/Provider/Provider"

const Register = () => {

  const [error, setError] = useState("")

  const { handleRegister , manageProfile } = useContext(Context)



  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    const name = e.target.name.value
    const image = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    const conPassword = e.target.Conpassword.value

    if (password !== conPassword) {
      setError("Password didn't match")
      return
    }


    if(!/[a-z]/.test(password)){
      setError("Password must container at least one lowerCase letter")
      return
    }    if(!/[A-Z]/.test(password)){
      setError("Password must container at least one UpperCase letter")
      return
    }
    if(password.length < 6){
      setError("Password must container al least 6 characters")
      return

    }

    handleRegister(email, password)
    .then(() =>{
      manageProfile(name, image)


    } )
  }



  return (
    <div>
      <form onSubmit={handleSubmit} className="card-body">

        {/* name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" required name="name" placeholder="name" className="input input-bordered" />
        </div>

        {/* photo  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo-URL</span>
          </label>
          <input type="text" required name="photo" placeholder="photo-url" className="input input-bordered" />
        </div>

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

        </div>


        {/* Con-password  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>

          </label>
          <div className="relative ">
            <input
              className="w-[320px] py-2 px-4 border border-solid border-gray-300 rounded-lg"
              // type={showP ? "text" : "password"}
              required name="Conpassword"
              placeholder="Confirm Password"

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
          error && <p className="text-red-500">{error}</p>
        }


        <div className="form-control mt-6">
          <button className="btn btn-primary bg-blue-500 font-semibold">Register</button>
        </div>



      </form>




    </div>
  )
}

export default Register
