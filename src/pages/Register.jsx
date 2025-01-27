import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { userRegister, setProfile, setUser, signInWithGoogle } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return regex.test(password);
  };

  const registerUser = async (e) => {
    setFormError("");
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPass = e.target.password.value;
    const userName = e.target.name.value;
    const userPhotoUrl = e.target.photoUrl.value;

    if (!validatePassword(userPass)) {
      setPasswordError(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }
    setPasswordError("");

    try {
      const userCredential = await userRegister(userEmail, userPass);
      const user = userCredential.user;

      setUser(user);
      toast.success("Successfully Registered");

      await setProfile(userName, userPhotoUrl);
      setFormError("");
      e.target.reset();
      navigate(location?.state ? location.state : "/");
    } catch (e) {
      setFormError(e.code);
      toast.error(e.code);
    }
  };

  const googleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      toast.error(error.code);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet><title>Register Hive</title></Helmet>
      <div className="hero-content flex-col">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Join us today and explore the amazing services we offer.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={registerUser} className="card-body">
          <fieldset className="fieldset">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
                required
              />
            
           
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered w-full"
                required
              />
              {passwordError && (
                <span className="text-sm text-error my-2">{passwordError}</span>
              )}
            
            
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
                required
              />
           
           
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered w-full"
                required
              />
            
            {formError && (
              <span className="text-sm text-error mt-1 text-wrap ">{formError}</span>
            )}
            
              <button className="btn btn-primary mt-4">Register</button>
            
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <div className="form-control card-body pb-0">
            <button
              className="btn btn-neutral "
              onClick={googleLogin}
            >
              <FcGoogle className="text-xl mr-2" /> Sign in with Google
            </button>
            <Link to="/auth/login" className="my-3 mb-5  link link-primary">
              Already have an account? Login
            </Link>
          </div>
          {/* <div className="form-control mt-4">
            <Link to="/auth/login" className=" link link-primary">
              Already have an account? Login
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
