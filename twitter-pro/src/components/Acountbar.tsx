import profileImg from "../assets/cat.jpg";

export default function Acountbar() {
  return (
    <>
      <div className="relative p-5">
        <input
          type="search"
          name="search"
          placeholder="Search Twitter"
          className=" bg-gray-200 h-10 px-10 pr-5 w-full rounded-full text-sm focus:outline-none bg-purple-white shadow  border-0"
        />
      </div>

      <div className="max-w-sm rounded-lg bg-dim-700 overflow-hidden shadow-lg m-4 ">
        <div className="flex-1 m-2">
          <h2 className="px-4 py-2 text-xl w-48 font-semibold">
            Trends for you
          </h2>
        </div>

        <hr className="border-gray-300" />

        {/* <!--first trending tweet--> */}
        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              1 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold ">أكاديمية_طويق#</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              10,466 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-gray-300 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* <!--second trending tweet--> */}

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              2 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold ">منصة_سطر#</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              8,464 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-gray-300 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* <!--third trending tweet--> */}

        <div className="flex">
          <div className="flex-1">
            <p className="px-4 ml-2 mt-3 w-48 text-xs text-gray-400">
              3 . Trending
            </p>
            <h2 className="px-4 ml-2 w-48 font-bold ">Talk_طويق#</h2>
            <p className="px-4 ml-2 mb-3 w-48 text-xs text-gray-400">
              5,586 Tweets
            </p>
          </div>
          <div className="flex-1 px-4 py-2 m-2">
            <a
              href=""
              className=" text-2xl rounded-full text-gray-400 hover:bg-gray-300 hover:text-blue-300 float-right"
            >
              <svg
                className="m-2 h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
            </a>
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* <!--show more--> */}

        <div className="flex">
          <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </div>
        </div>
      </div>
      {/* <!--people suggetion to follow section--> */}
      <div className="max-w-sm rounded-lg  bg-dim-700 overflow-hidden shadow-lg m-4">
        <div className="flex">
          <div className="flex-1 m-2">
            <h2 className="px-4 py-2 text-xl w-48 font-semibold ">
              Who to follow
            </h2>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* <!--first person who to follow--> */}

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full ml-4 mt-2"
                  src={profileImg}
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium ">Nouf Jafari</p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @NoufJafari
                </p>
              </div>
            </div>
          </div>
          <div className=" flex-1 px-1 py-1 ">
            <a href="" className=" float-right">
              <button className="bg-transparent hover:bg-gray-300 font-semibold hover:text-white py-2 px-3 border border-gray hover:border-transparent rounded-full">
                Follow
              </button>
            </a>
          </div>
        </div>
        <hr className="border-gray-300" />

        {/* <!--second person who to follow--> */}

        <div className="flex flex-shrink-0">
          <div className="flex-1 ">
            <div className="flex items-center w-48">
              <div>
                <img
                  className="inline-block h-10 w-10 rounded-full ml-4 mt-2"
                  src="https://1fid.com/wp-content/uploads/2022/06/Twitter-profile-picture-4-720x720.jpg"
                  alt=""
                />
              </div>
              <div className="ml-3 mt-3">
                <p className="text-base leading-6 font-medium ">
                  Fahad Alghamdi{" "}
                </p>
                <p className="text-sm leading-5 font-medium text-gray-400 group-hover:text-gray-300 transition ease-in-out duration-150">
                  @FahadAlghamdi
                </p>
              </div>
            </div>
          </div>
          <div className=" flex-1 px-1 py-1 ">
            <a href="" className=" float-right">
              <button className="bg-transparent hover:bg-gray-300 font-semibold hover:text-white py-2 px-3 border border-gray hover:border-transparent rounded-full">
                Follow
              </button>
            </a>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* <!--show more--> */}

        <div className="flex">
          <div className="flex-1 p-4">
            <h2 className="px-4 ml-2 w-48 font-bold text-blue-400">
              Show more
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
