import videobg from "../assets/YHlm.gif";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function intro() {
  const navg = useNavigate();

  useEffect(() => {
    setTimeout(() => navg("/login"), 6000);
  }, []);

  return (
    <div className="bg-[#5BA8E2] h-screen flex justify-center">
      <img className="w-8/12" src={videobg} />
    </div>
  );
}
