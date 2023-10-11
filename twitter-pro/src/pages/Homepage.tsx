import React from "react";
import Sidecpar from "../components/Sidepar";
import Acountbar from "../components/Acountbar";
import axios from "axios";
import Swal from "sweetalert2";

type IuserInfo = {
  contant: string;
  id: "";
};

export default function Homepage() {
  localStorage.setItem("active", "true");
  const Uname =localStorage.getItem("UName");
  const name =localStorage.getItem("Name");

  const [userInput, setuserInput] = React.useState<IuserInfo>({
    contant: "",
    id: "",
  });

  const [list, setList] = React.useState<IuserInfo[]>([]);
  const [liked, setLiked] = React.useState<string[]>([]);

  const API = "https://64f2f3a3edfa0459f6c62798.mockapi.io/tweets";
  const handleTweets = () => {
    axios
      .post(API, {
        contant: userInput.contant,
      })
      .then(() => {
        setList([...list, userInput]);
        Swal.fire(
          '',
          'Your Tweet was sent',
          'success'
        )      });
  };

  React.useEffect(() => {
    axios.get(API).then((res) => {
      console.log(res);
      setList(res.data);
    });
    const likedTwits = localStorage.getItem("likedTwits");
    if (likedTwits) {
      setLiked(JSON.parse(likedTwits));
    }
  }, [userInput]);
  React.useEffect(() => {
    localStorage.setItem("likedTwits", JSON.stringify(liked));
  }, [liked]);


  const toggleLike = (id: string) => {
    if (liked.includes(id)) {
      setLiked((prevLiked) => prevLiked.filter((itemId) => itemId !== id));
    } else {
      setLiked((prevLiked) => [...prevLiked, id]);
    }
  };
  return (
    <>
      <div className=" grid grid-cols-5 max-sm:flex h-screen">
        <div className=" bg-white h-screen col-start-1 max-sm:w-1/5 col-end-2">
          <Sidecpar />
        </div>

        <div className="bg-white h-screen overflow-auto max-sm:w-80 col-start-2 col-span-3 border-l-2 border-gray-300">
          <div className="flex">
            <div className="flex-1 mx-2">
              <h2 className="px-4 py-2 text-xl max-sm:mt-2 max-sm:text-sm font-semibold">Home</h2>
            </div>
            <div className="flex-1 px-4 py-2 mx-2">
              <a href="" className=" text-2xl font-medium float-right">
                <svg
                  className="m-2 h-6 w-6 max-sm:w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <hr className="border-gray-300" />

          <div className="flex">
            <div className="m-2 w-10 py-1">
              <img
                className="inline-block h-10 w-10 max-sm:w-8 max-sm:h-8 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="flex-1 px-2 pt-2 mt-2">
              <textarea
                className=" bg-transparent text-gray-400 font-medium text-lg max-sm:text-sm w-full"
                rows={2}
                cols={50}
                placeholder="What's happening? "
                value={userInput.contant}
                onChange={(e) => {
                  setuserInput({ ...userInput, contant: e.target.value });
                }}
              ></textarea>
            </div>
          </div>

          <div className="flex">
            <div className="w-10"></div>

            <div className="w-64 px-2 max-sm:px-0 max-sm:w-16">
              <div className="flex items-center">
                <div className="flex-1 text-center px-1 py-1 m-2 max-sm:m-1">
                  <a
                    href=""
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-200 hover:text-blue-500"
                  >
                    <svg
                      className="text-center h-7 w-6 max-sm:w-4 max-sm:h-5 "
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1 text-center py-2 m-2 max-sm:m-1">
                  <a
                    href=""
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-200 hover:text-blue-500"
                  >
                    <svg
                      className="text-center h-7 w-6 max-sm:w-4 max-sm:h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                      <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1 text-center py-2 m-2 max-sm:m-1">
                  <a
                    href=""
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full  hover:bg-blue-200 hover:text-blue-500"
                  >
                    <svg
                      className="text-center h-7 w-6 max-sm:w-4 max-sm:h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>

                <div className="flex-1 text-center py-2 m-2  max-sm:m-1">
                  <a
                    href="#"
                    className="mt-1 group flex items-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full  hover:bg-blue-200 hover:text-blue-500"
                  >
                    <svg
                      className="text-center h-7 w-6 max-sm:w-4 max-sm:h-5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex-1 max-sm:ml-4">
              <button
                className="bg-blue-400 hover:bg-blue-500 mt-5 text-white max-sm:text-[0.60rem] max-sm:px-3 font-bold py-2 px-8 rounded-full mr-8 float-right"
                onClick={handleTweets}
              >
                 Tweet
              </button>
            </div>
          </div>

          <hr className="border-gray-200 border-4" />

          <ul className="list-none">
            <li>
              
              {list.map((item) => {
                const isLiked = liked.includes(item.id);
                const likeImage = isLiked
                  ? "https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
                  : "https://cdn-icons-png.flaticon.com/128/1077/1077035.png ";
                return (
                  <>
                    <article className="">
                      <div className="flex flex-shrink-0 p-4 pb-0">
                        <a href="" className="flex-shrink-0 group block">
                          <div className="flex items-center">
                            <div>
                              <img
                                className="inline-block h-10 w-10 max-sm:h-5 max-sm:w-5 rounded-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU"
                                alt=""
                              />
                            </div>
                            <div className="ml-3  flex justify-around gap-96">
                              <div className=" mr-12">
                                <p className="text-base max-sm:text leading-6 font-medium ">
                                  {name}
                                  <span className="text-sm ml-2 max-sm:text-xs leading-5 font-medium text-gray-400 group-hover:text-gray-300">
                                    @{Uname} . 3 September
                                  </span>
                                </p>
                              </div>

                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="pl-16 max-sm:pl-0">
                        <p className="text-base max-sm:pl-10 max-sm:text-sm width-auto font-medium flex-shrink">
                          {item.contant}
                        </p>

                        <div className="flex items-center py-4 ml-24 max-sm:w-[85%] max-sm:ml-10">
                          <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 mr-2 max-sm:h-4 max-sm:w-4" 
                            >
                              <g>
                                <path d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67c0-.414-.335-.75-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path>
                              </g>
                            </svg>
                            1
                          </div>
                          <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-green-400 transition duration-350 ease-in-out">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 mr-2 max-sm:ml-2 max-sm:h-4 max-sm:w-4"
                            >
                              <g>
                                <path d="M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"></path>
                              </g>
                            </svg>
                            3
                          </div>
                          {/* LIKE IS HERE */}
                          <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-red-600 transition duration-350 ease-in-out">
                            <a onClick={() => toggleLike(item.id)}>
                              <img
                                className="ml-8 mt-3 w-5 max-sm:mt-0 max-sm:ml-3 max-sm:w-4 cursor-pointer"
                                src={likeImage}
                              />
                            </a>
                          </div>
                          <div className="flex-1 flex items-center  text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                            <svg
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-5 h-5 max-sm:h-4 max-sm:w-4 mr-2 max-sm:mr-0"
                            >
                              <g>
                                <path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path>
                                <path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path>
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <hr className="border-gray-300" />
                    </article>
                  </>
                );
              })}
            </li>
           
          </ul>
        </div>

        <div className="bg-white h-screen max-sm:hidden col-end-6 col-span-1 border-l-2 border-gray-300">
          <Acountbar />
        </div>
      </div>
    </>
  );
}
