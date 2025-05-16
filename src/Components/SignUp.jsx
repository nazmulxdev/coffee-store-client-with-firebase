import React, { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import { errorMessage, successMessage } from "../Utilities/sweetAlerts";
import { updateProfile } from "firebase/auth";
import { auth } from "../Utilities/firerBase.config";

const SignUp = () => {
  const { createUser, setCurrentUser } = useContext(AuthContext);
  const handleCreateUser = (event) => {
    event.preventDefault();
    // const email = event.target.email.password;
    // const password = event.target.password.value;
    const form = event.target;
    const formData = new FormData(form);
    const userInfo = Object.fromEntries(formData.entries());
    const { name, address, phoneNumber, photoUrl, email, password } = userInfo;

    createUser(email, password)
      .then((user) => {
        const userInformation = {
          name,
          address,
          phoneNumber,
          photoUrl,
          email,
          uid: user.user.uid,
          creationTime: user?.user?.metadata?.creationTime,
          lastSignInTime: user?.user?.metadata?.lastSignInTime,
        };
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        }).then(() => {
          setCurrentUser(auth.currentUser);
          //   save profile in the data base

          fetch("https://coffee-store-server-bice-seven.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userInformation),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                form.reset();
                successMessage("Your account is created Successfully");
              }
            });
        });
      })
      .catch((error) => {
        const errorText = error.message;
        errorMessage(errorText);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl mx-auto">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <form onSubmit={handleCreateUser} className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your name"
          />
          <label className="label">Address</label>
          <input
            type="text"
            name="address"
            className="input w-full"
            placeholder="Your address"
          />
          <label className="label">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            className="input w-full"
            placeholder="Your phone number"
          />
          <label className="label">PhotoURL</label>
          <input
            type="text"
            name="photoUrl"
            className="input w-full"
            placeholder="Your photo url"
          />
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
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
