import React, { useEffect } from "react";
import { cart } from "../assets/icons";

export default function Slidebar({ open, onClose, children }) {
  // useEffect(() => {
  //   // Disable scrolling on mount
  //   document.body.style.overflow = 'hidden';

  //   // Re-enable scrolling on unmount
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);
  function handleClick() {
    onClose();
    document.body.style.overflow = "auto";
  }

  return (
    <div
      onClick={handleClick}
      className={`
      fixed inset-0  flex justify-start items-start transition-colors h-screen
      ${open ? "visible bg-black/40" : "invisible"}
      `}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
        bg-dark-orange  shadow-sm w-80 h-full
        ${open ? "opacity-100" : "opacity-0"}
        `}
      >
        <div className=" mx-11 flex flex-col space-y-4">
        <div className=" pt-6  flex flex-col items-center  pb-5 space-y-4 relative">
          <button className=" sm:text-xl text-sm text-white bg-slate-300 w-[234px] h-14 rounded-2xl font-medium">
            Sign In
          </button>

          <button className=" sm:text-xl text-sm text-white bg-yellow-400 w-[234px]  h-14 rounded-2xl font-medium">
            Sign Up
          </button>

          
        </div>
        <a href=""
          className=" font-medium"> Create a business account</a>
          <a href=""
          className=" font-medium"> Add your resturant</a>
          <a href=""
          className=" font-medium"> Sign up to deliver</a>

          <div className="flex flex-col items-center bottom-10 absolute overflow-hidden w-[234px]">
            <img src={cart} 
            alt=""
            width={50}
            height={50}
            className="pb-5" />
            <p className="text-center text-[16px] font-medium pl-4 leading-7 ">Download our app to get experience more.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
