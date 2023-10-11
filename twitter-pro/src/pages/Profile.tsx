import React from "react";
import Twittws from "../Hooks/Twittws";
import Sidepar from "../components/Sidepar";
import Acountbar from "../components/Acountbar";

export default function Profile() {
  localStorage.setItem("active", "false");
  const Uname =localStorage.getItem("UName");
  const name =localStorage.getItem("Name");
  const [Btn, setBtn] = React.useState("Mytwittes");
  return (
    <div>
      <div className=" grid grid-cols-5 max-sm:flex h-screen">
        <div className=" bg-white max-sm:w-1/6 h-screen col-start-1 col-end-2">
          <Sidepar />
        </div>

        <div className=" h-screen overflow-auto max-sm:w-80 col-start-2 col-span-3 border-l-2 border-gray-300">

<div>

</div>

<div>

    <div className="p-4">
        <div className="relative flex w-full">
            <div className="flex flex-1">
                <div className="" >
                    <div className="md rounded-full relative w-32 ">
                        <img className="md rounded-full ml-10 max-sm:ml-0 max-sm:w-20 max-sm:border-2 relative border-4 border-gray-900" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU"alt=""/>
                        <div className="absolute"></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col text-right ">
                <button className="flex justify-center max-sm:mr-0 max-sm:text-xs mr-10 max-h-max whitespace-nowrap focus:outline-none  focus:ring   max-w-max border bg-transparent border-blue-500 text-blue-500 h hover:bg-blue-200  items-center hover:shadow-lg font-bold py-2 px-4 rounded-full ml-auto">
                    Edit Profile
                </button>
            </div>
        </div>

        <div className="space-y-1 justify-center w-full mt-3 ">
            <div>
                <h2 className="text-xl leading-6 font-bold mx-5 mt-5 max-sm:text-sm max-sm:ml-5 text-Black ml-20">{name}</h2>
                <p className="text-base leading-5 font-medium  mx-6 max-sm:text-sm max-sm:ml-5 text-gray-600 ml-20">@{Uname}</p>
            </div>
            <div className="mt-3 m-10">
                <div className="text-gray-600 flex">
                <br />
                <br />
                </div>
            </div>

        </div>
    </div>
    <hr className="border-gray-300"/>
</div>

          <div className="bg-white flex justify-center gap-60 hover:text-blue-500 border-gray-300 border-b  max-sm:text-sm max-sm:gap-5 text-xl font-semibold  text-black py-3">
            
            <button
              onClick={() => {
                setBtn("Mytwittes");
              }}
            >
              Your Tweets
            </button>

          </div >
          {Btn == "Mytwittes" && <Twittws />}
        </div>
        <div className="bg-white h-screen col-end-6 max-sm:hidden col-span-1 border-l-2 border-gray-300">
          <Acountbar />
        </div>
      </div>
    </div>
  );
}
