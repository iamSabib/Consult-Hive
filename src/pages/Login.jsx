import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [formError, setFormError] = useState("");

  const loginUser = async (e) => {
    setFormError("");
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPass = e.target.password.value;

    try {
      const userCredential = await userLogin(userEmail, userPass);
      const user = userCredential.user;
      setUser(user);
      toast.success("Successfully Logged In");

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
      <Helmet><title>Login</title></Helmet>
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Welcome Back!</h1>
          <p className="py-6">
            Log in to your account and explore the amazing services we offer.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={loginUser} className="card-body">
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
              {formError && (
                <span className="text-sm text-error my-2">{formError}</span>
              )}
              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
          </form>
          <div className="divider">OR</div>
          <div className="form-control card-body pb-0">
            <button
              className="btn btn-neutral"
              onClick={googleLogin}
            >
              <FcGoogle className="text-xl mr-2" /> Sign in with Google
            </button>
            <Link to="/auth/register" className="my-3 mb-5 link link-primary">
              Don't have an account? Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
