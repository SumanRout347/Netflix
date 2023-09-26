import React, { useRef, useState } from "react";
import Head from "./Head";
import { signupFieldValidator, signinFieldValidator } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { bgImage, profileUrl } from "../utils/constants";
const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errorMesage, setErrorMesage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    console.log(email, password);
    let message = "";
    if (isSignedIn) {
      message = signinFieldValidator(
        email.current.value,
        password.current.value
      );
    } else {
      message = signupFieldValidator(
        name.current.value,
        email.current.value,
        password.current.value
      );
    }

    console.log(message);
    setErrorMesage(message);
    if (message) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((data) => {
          const user = data.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:profileUrl
             ,
          });
        })
        .then(() => {
      
          dispatch(
            addUser({
              uid: auth.currentUser.uid,
              email: auth.currentUser.email,
              displayName: name.current.value,
              photoURL: profileUrl,
            })
          );
        })
        .catch((error) => {
          console.log(error);
          navigate("/");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((data) => {
        })
        .catch((error) => {
          console.log(error);
          setErrorMesage(error.message)
        });
    }
  };

  return (
    <div className="bg-black md:bg-none h-[100vh]">
      <Head />
      <img
        src={bgImage}
        alt="bgImg"
        className="brightness-50 md:h-full md:w-full absolute top-0 md:opacity-100 opacity-0"
      />
      <form
        onSubmit={submit}
        className="relative bg-black z-20 md:max-w-md sm:p-[50px] md:p-[60px] p-[15px] mx-auto translate-y-[50px]  md:translate-y-[60px] text-white rounded-md md:bg-opacity-70 opacity-100"
      >
        <h1 className="mb-6 text-3xl font-bold">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full md:mb-4 mb-8 md:px-4 md:py-2 px-5 py-3 rounded-md outline-none"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email"
          className={
            errorMesage
              ? `w-full md:mb-4 mb-8 md:px-4 md:py-2 px-5 py-3 rounded-md outline-none`
              : `w-full md:mb-4 mb-8 md:px-4 md:py-2 px-5 py-3 rounded-md outline-none`
          }
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full md:mb-4 mb-8 md:px-4 md:py-2 px-5 py-3 rounded-md outline-none"
        />
        <p className="text-orange-400 md:mb-6 mb-10">{errorMesage}</p>
        <button className="w-full bg-red-700 md:p-3 p-4 rounded-md font-bold md:mb-6 mb-10">
          {isSignedIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-gray-500 font-semibold">
          {isSignedIn ? "New to Netflix?" : "Already a user?"}{" "}
          <span
            className="cursor-pointer text-white hover:underline"
            onClick={() => setIsSignedIn(!isSignedIn)}
          >
            {isSignedIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
      
    </div>
  );
};

export default Login;
