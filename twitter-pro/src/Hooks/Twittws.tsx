import React from "react";
import axios from "axios";
type Itwit = {
  id: string;
  contant: string;
};
export default function Twittws() {
  const ApiTwitts = "https://64f2f3a3edfa0459f6c62798.mockapi.io/tweets";

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
    axios
      .delete(`https://64f2f3a3edfa0459f6c62798.mockapi.io/tweets/${id}`)
      .then(() => {
        setTwit((prevTwit) => prevTwit.filter((twit) => twit.id !== id));
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
      <div className="  h-screen grid grid-cols-2 max-sm:grid-cols-1  bg-slate-50 p-10">
        {Twit.map((item) => {
          const isLiked = liked.includes(item.id);
          const likeImage = isLiked
            ? "https://cdn-icons-png.flaticon.com/128/2589/2589175.png"
            : "https://cdn-icons-png.flaticon.com/128/1077/1077035.png ";
          return (
            <div className="rounded-sm border-2 h-20 w-10/12 max-sm:w-48 text-black  flex flex-col justify-start text-left ">
              <h1 className="font-bold  ml-8 mt-3  max-sm:ml-3 text-base">
                {item.contant}
              </h1>
              <div className="flex">
                <a onClick={() => deleteID(item.id)}>
                  <img
                    className="ml-8 mt-3 w-5 max-sm:w-6 cursor-pointer"
                    src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"
                    alt="delete"
                  />
                </a>

                <a onClick={() => toggleLike(item.id)}>
                  <img
                    className="ml-8 mt-3 w-5 max-sm:w-6 cursor-pointer"
                    src={likeImage}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
