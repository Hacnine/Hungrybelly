import React, { useState } from "react";
import Signin from "./Signin";
import {logoSm } from "../assets/icons";
import OpenSlideBar from "./OpenSlideBar";

export default function Index() {
  const [showSignin, setshowSignin] = useState(false);
  const openDialouge = () => setshowSignin(false);

  function openSigninDialouge() {
    setshowSignin(true);
  }

  return (
    <section className="">
      <div className=" relative">
        <img src="src\assets\images\banner-first.svg" 
        alt=""
        className="relative flex-1 object-cover h-full" />
        <div className=" absolute top-0 flex items-center justify-between px-5 w-full">
          <div>
            <OpenSlideBar/>
          </div>
          <div className="">
            <img src={logoSm} className="h-28 md:w-44 w-36  pl-6 " alt="" />
          </div>

          <div className=" space-x-3 flex justify-between items-center">
            <button
              className="bg-yellow-500 text-sm rounded-2xl font-serif  font-normal text-white md:w-16 md:h-8 w-[68px] h-8 text-centers cursor-pointer"
              onClick={openDialouge}
            >
              Sign Up
            </button>

            <div className=" space-x-3 flex justify-between items-center">
              <button
                className=" bg-gray-100 text-sm rounded-2xl font-serif  font-normal text-orange text-center md:w-16 md:h-8  w-[68px] h-8 cursor-pointer"
                onClick={openSigninDialouge}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSignin && <Signin openDialouge={openDialouge}> </Signin>}
    </section>
  );
}
