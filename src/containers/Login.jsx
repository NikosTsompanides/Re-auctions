import React, { useState } from "react";
import { connect } from "react-redux";
import AuthLayout from "../layout/AuthLayout";
import GoogleIcon from "../components/misc/icons/GoogleIcon";
import withLayout from "../utils/HOCs/withLayout";
import { userLogInWithEmailAndPassword, userLogInWithGoogle } from "../store/user/actions";

const Login = ({ loginWithEmailAndPassword, loginWithGoogle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden ">
      <div className="w-full md:w-96 py-8 px-6 md:px-8 transition-opacity opacity-1 duration-75 ease-in-out">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-white text-center">
          Reauctions
        </h2>

        <p className="text-xl text-gray-600 dark:text-gray-200 text-center">
          Welcome back!
        </p>

        <a
          href="/"
          className="flex items-center justify-center mt-4 text-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-600"
          onClick={() => loginWithGoogle()}
        >
          <div className="px-4 py-3">
            <GoogleIcon />
          </div>

          <span className="px-4 py-3 w-5/6 text-center font-bold">
            Log in with Google
          </span>
        </a>

        <div className="mt-4 flex items-center justify-between">
          <span className="border-b dark:border-gray-600 w-1/5 lg:w-1/4"></span>

          <span className="text-xs text-center text-gray-500 dark:text-gray-400 uppercase hover:underline" >
            or login with email
          </span>

          <span className="border-b dark:border-gray-400 w-1/5 lg:w-1/4"></span>
        </div>

        <div className="mt-4">
          <label
            className="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="LoggingEmailAddress"
            className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block text-gray-600 dark:text-gray-200 text-sm font-medium mb-2"
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <a
              href="#"
              className="text-xs text-gray-500 dark:text-gray-300 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          <input
            id="loggingPassword"
            className="bg-wbg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded py-2 px-4 block w-full focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mt-8">
          <button
            className="bg-gray-700 text-white py-2 px-4 w-full tracking-wide rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            onClick={() => loginWithEmailAndPassword(email, password)}
          >
            Login
          </button>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="border-b dark:border-gray-600 w-1/5 md:w-1/4"></span>

          <a
            href="/signup"
            className="text-xs text-gray-500 dark:text-gray-400 uppercase hover:underline"
          >
            or sign up
          </a>

          <span className="border-b dark:border-gray-600 w-1/5 md:w-1/4"></span>
        </div>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  loginWithEmailAndPassword: (email, password) =>
    dispatch(userLogInWithEmailAndPassword(email, password)),

  loginWithGoogle: () => dispatch(userLogInWithGoogle())
});

export default withLayout(AuthLayout)(connect(null, mapDispatchToProps)(Login));
