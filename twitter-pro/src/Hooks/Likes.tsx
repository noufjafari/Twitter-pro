import React from "react";
import axios from "axios";
type Itwit = {
  id: string;
  contant: string;
};
export default function Likes() {
  const [Twit, setTwit] = React.useState<Itwit[]>([]);
  const [likedItems, setLikedItems] = React.useState<Itwit[]>([]);
  const [liked, setLiked] = React.useState<string[]>([]);
  React.useEffect(() => {
    axios
      .get("https://64f2f3a3edfa0459f6c62798.mockapi.io/tweets")
      .then((res) => {
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
  React.useEffect(() => {
    const likedTwitIds = localStorage.getItem("likedTwits");
    if (likedTwitIds) {
      const likedIds = JSON.parse(likedTwitIds);
      const likedTwits = likedIds.map((id: string) => {
        return Twit.find((twit: Itwit) => twit.id === id);
      });
      setLikedItems(likedTwits);
    }
  }, [Twit]);

  return (
    <div>
      <div className="  h-screen grid grid-cols-2 max-sm:grid-cols-1  bg-slate-50 p-10 ">
        {likedItems.map((item: Itwit) => {
          return (
            <div className="rounded-sm border-2 h-20 w-10/12 max-sm:w-48 text-black  flex flex-col justify-start text-left ">
              <h1 className="font-bold  ml-8 mt-6  max-sm:ml-3 text-base">
                {item.contant}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
