import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { errorMessage, successMessage } from "../Utilities/sweetAlerts";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
      .then((result) => {
        // update last log in time
        const logInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        // update lastSignInTime in data base

        fetch("https://coffee-store-server-bice-seven.vercel.app/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(logInInfo),
        })
          .then((res) => res.json())
          .then(() => {
            successMessage("Logged in Successful");
          });
      })
      .catch((error) => {
        errorMessage(error.message);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-5xl font-bold text-center">Sign In now!</h1>
        <form onSubmit={handleSignIn} className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input w-full"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn-neutral mt-4">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
