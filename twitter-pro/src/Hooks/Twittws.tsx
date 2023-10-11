import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

type Itwit = {
  id: string;
  contant: string;
};
export default function Twittws() {
  const ApiTwitts = "https://64f2f3a3edfa0459f6c62798.mockapi.io/tweets";
  const Uname =localStorage.getItem("Name");
  const name =localStorage.getItem("Name");

  const [Twit, setTwit] = React.useState<Itwit[]>([]);
  const [liked, setLiked] = React.useState<string[]>([]);
  React.useEffect(() => {
    axios.get(ApiTwitts).then((res) => {
      setTwit(res.data);
    });
    const likedTwits = localStorage.getItem("likedTwits");
    if (likedTwits) {
      setLiked(JSON.parse(likedTwits));
    }
  }, []);
  React.useEffect(() => {
    localStorage.setItem("likedTwits", JSON.stringify(liked));
  }, [liked]);
  const deleteID = (id: string) => {
    Swal.fire({
      title: "Are you sure you want to delete this Tweet?",
      showCancelButton: true,
      confirmButtonColor: "#e34237",
      cancelButtonColor: "#3B82F6",
      confirmButtonText: " Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
    axios
      .delete(`https://64f2f3a3edfa0459f6c62798.mockapi.io/tweets/${id}`)
      .then(() => {
        setTwit((prevTwit) => prevTwit.filter((twit) => twit.id !== id));
      });
      
    }
  });
  };
  const toggleLike = (id: string) => {
    if (liked.includes(id)) {
      setLiked((prevLiked) => prevLiked.filter((itemId) => itemId !== id));
    } else {
      setLiked((prevLiked) => [...prevLiked, id]);
    }
  };
  return (
    <>
      <div className=" max-sm:h-auto  h-screen flex flex-col max-sm:grid-cols-1  bg-white p-15">
        {Twit.map((item) => {
          const isLiked = liked.includes(item.id);
          const likeImage = isLiked
            ? "https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
            : "https://cdn-icons-png.flaticon.com/128/1077/1077035.png ";
          return (
            <article className="">
            <div className="flex flex-shrink-0 p-4 pb-0 max-sm:overflow-x-scroll ">
              <a href="" className="flex-shrink-0 group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-10 w-10 max-sm:h-5 max-sm:w-5 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpWIUTEbl3Km2gu10Jsib39To4S4IYsn8QhA&usqp=CAU"
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex justify-around gap-96">
                    <div className=" mr-12">
                      <p className="text-base leading-6 max-sm:text-sm font-medium ">
                      {name}
                        <span className="text-sm max-sm:text-xs ml-2 leading-5 font-medium text-gray-400 group-hover:text-gray-300">
                        @{Uname} . 3 September
                        </span>
                      </p>
                    </div>

                  </div>
                </div>
              </a>
            </div>

            <div className="pl-16 max-sm:pl-0 ">
              <p className="text-base max-sm:pl-9 width-auto max-sm:text-sm font-medium flex-shrink">
                {item.contant}
              </p>

              <div className="flex items-center max-sm:w-4/5 max-sm:ml-10 py-4 ml-1">
                <div className="flex-1 flex items-center text-xs text-gray-400 hover:text-blue-400 transition duration-350 ease-in-out">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 max-sm:h-4 max-sm:w-4  mr-2"
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
                    className="w-5 h-5 max-sm:h-4 max-sm:w-4  mr-2"
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
                      className="ml-4 mt-3 w-5 max-sm:mt-0 max-sm:ml-2 max-sm:w-4 cursor-pointer"
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
                <a onClick={() => deleteID(item.id)}>
                  <img
                    className="mr-10 mt-3 w-5 max-sm:w-4 max-sm:mt-0 max-sm:ml-0 cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                    alt="delete"
                  />
                </a>
              </div>
            </div>
            <hr className="border-gray-300" />
          </article> 

          );
        })}
      </div>
    </>
  );
}
