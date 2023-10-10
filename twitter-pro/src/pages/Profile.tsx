import React from "react";
import Twittws from "../Hooks/Twittws";
import Likes from "../Hooks/Likes";
import Sidepar from "../components/Sidepar";
export default function Profile() {
  const [Btn, setBtn] = React.useState("Mytwittes");
  return (
    <div>
      <div className=" grid grid-cols-5  h-screen">
        <div className=" bg-white h-screen col-start-1 col-end-2">
          <Sidepar />
        </div>

        <div className=" h-screen col-start-2 col-end-6 overflow-auto">
          <div className="flex justify-start gap-20 bg-blue-300 py-10 pl-10">
            <img
              className="rounded-full w-48 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU"
            />
            <h1 className="font-bold text-2xl text-white mt-20">
              Welcom to Profile.
            </h1>
          </div>
          <div className="bg-blue-400 flex justify-center gap-60 text-xl font-bold text-white py-3">
            <button
              onClick={() => {
                setBtn("Mytwittes");
              }}
            >
              Tweet
            </button>
            <button
              onClick={() => {
                setBtn("likes");
              }}
            >
              likes
            </button>
          </div>
          {Btn == "Mytwittes" && <Twittws />}
          {Btn == "likes" && <Likes />}
        </div>
      </div>
    </div>
  );
}
