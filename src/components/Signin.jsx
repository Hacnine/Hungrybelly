import React from "react";

export default function Signin({openDialouge}) {
  function handleClick(){
    openDialouge();
  }
  return (
<>
   
      {/* Login */}
      <div className="box-border  w-96 min-h-full border">

        

        <div className="max-w-lg mx-auto shadow-xl px-6 py-7 rounded overflow-hidden ">
          <div className="flex items-center justify-between">
          <h2 className="text-2xl  font-medium mb-1 left-0">Sign in or Sign up </h2>
          <span className="right-2">
            <i>x</i>
          </span>
          </div>

          <form action="">
            <div className="space-y-6">
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block text-start">
                  {" "}
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full border bg-gray-200 border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  "
                  placeholder="Enter your name"
                />
              </div>

              <div className="">
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  {" "}
                  Password
                </label>
                <input
                  type="email"
                  className="block w-full bg-gray-200 border border-gray-500 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-[] placeholder-gray-400  "
                  id="password"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <div className=" space-x-2">
                  <input
                    type="checkbox"
                    name="checkbox"
                    className="text-[#ff0000] rounded focus:ring-0 cursor-pointer"
                    id="cat-1"
                  />
                  <label className="text-gray-600 ml-2">Remember Me</label>
                </div>

                <a href="" className="text-red-600">
                  Forget password?
                </a>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className=" block text-center bg-[#ff0000] w-full rounded-md text-white h-12  ring-1 hover:bg-transparent hover:text-[#ff0000] ring-[#ff0000] mt-4"
              >
                Log in
              </button>
            </div>
          </form>

          {/* <!-- Login with --> */}
          <div className="mt-6 flex justify-center relative">
            <div className="text-gray-600 text center uppercase px-3 bg-gray-200 z-10 ">
              OR LOG IN WITH
            </div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>

          <div className="flex flex-col items-center text-center mt-4 gap-4">
          

             <a
                className=" flex items-center justify-center text-center bg-slate-400 w-full rounded-3xl text-white h-12  ring-1 hover:bg-transparent hover:text-[#ff0000] ring-[#ff0000] mt-4 "
              >
                Google
              </a>

              <a href=""></a>

              <a
                className=" block text-center bg-slate-400 w-full rounded-md text-white h-12  ring-1 hover:bg-transparent hover:text-[#ff0000] ring-[#ff0000] mt-4 "
              >
                Log in
              </a>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an Account?
            <a
              href="http://127.0.0.1:5500/dist/register.html"
              className="text-red-600"
            >
              Register Now!
            </a>
          </p>
        </div>
      
      <button className=" bg-yellow-400 text-balck w-20 h-9" onClick={openDialouge}>Cancel Signin</button>
      </div>
      {/*  Login End */}
      </>
  );
}
