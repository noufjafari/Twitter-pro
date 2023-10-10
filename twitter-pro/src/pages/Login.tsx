import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);

  const navg = useNavigate();
  {
    loggedIn;
  }
  const API = "https://64e1142f50713530432cee2a.mockapi.io/login";
  const handleLogin = () => {
    axios.get(API).then((res) => {
      const User = res.data.find(
        (User: any) => User.username === username && User.password === password
      );

      if (User) {
        setLoggedIn(true);
        navg("/Homepage");
      } else {
        alert("Invalid input");
      }
    });
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
        <div className="flex  lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <div className="bg-white rounded-md shadow-2xl p-5">
              <h1 className="text-gray-800 font-bold text-4xl mb-10">
                Log in to Twitter
              </h1>

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <input
                  id="username"
                  className=" pl-2 w-full outline-none border-none"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
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
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                onClick={handleLogin}
                className="block w-full bg-blue-500 mt-5 py-2 rounded-2xl hover:bg-blue-300 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Login
              </button>
              <div className="flex justify-center  mt-4">
                <p className="text-sm ml-2">Don't have an account yet?</p>
                <a
                  href="/Signup"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
