import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type Event = {
  username: string;
  password: string;
  email: string;
  id: string;
};
export default function Signup() {
  const [inputValue, setInputValue] = React.useState<Event>({
    username: "",
    password: "",
    email: "",
    id: "",
  });

  const navgit = useNavigate();
  const logIn = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[a-zA-Z0-9]{4,}$/;

    if (!emailRegex.test(inputValue.email)) {
      alert("Invalid email");

      return;
    }

    if (!passwordRegex.test(inputValue.password)) {
      alert("Invalid password");
      return;
    }
    if (inputValue.username && inputValue.password && inputValue.email) {
      axios
        .post("https://64e1142f50713530432cee2a.mockapi.io/login", {
          username: inputValue.username,
          password: inputValue.password,
          email: inputValue.email,
        })
        .then(() => {
          alert("Signup successful!");
        });
      navgit("/login");
    } else {
      alert("some fields missed.");
    }
  };

  return (
    <div>
      <div className="h-screen flex justify-center">
        <div className=" lg:flex w-1/4 justify-around items-center">
          <svg
            viewBox="0 0 24 24"
            className="h-80 w-96 text-blue-500 ml-3 my-3"
            fill="currentColor"
          >
            <g>
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </g>
          </svg>
        </div>
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <div className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-4xl mb-10">
                Sign up to Twitter
              </h1>

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <input
                  id="username"
                  className=" pl-2 w-full outline-none border-none"
                  type="text"
                  name="username"
                  placeholder="username"
                  value={inputValue.username}
                  onChange={(e) => {
                    setInputValue({ ...inputValue, username: e.target.value });
                  }}
                />
              </div>

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={inputValue.email}
                  onChange={(e) => {
                    setInputValue({ ...inputValue, email: e.target.value });
                  }}
                />
              </div>

              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={inputValue.password}
                  onChange={(e) => {
                    setInputValue({ ...inputValue, password: e.target.value });
                  }}
                />
              </div>

              <button
                onClick={logIn}
                type="submit"
                className="block w-full bg-blue-500 mt-5 py-2 rounded-2xl hover:bg-blue-300 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Sign up
              </button>
              <div className="flex justify-center  mt-4">
                <p className="text-sm ml-2">Already have an account? </p>{" "}
                <a
                  href="/login"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
