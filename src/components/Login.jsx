import React from "react";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-[#F9FAFB] flex items-center">
      <div className="h-max mx-auto flex flex-col items-center">
        <img
          className="h-[40px] w-[47px] mb-5"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
        <h1 className="font-bold text-xl">Sign in to your Account</h1>

        <div className="shadow-xl bg-white p-10 flex flex-col gap-4 text-sm">
          <label className="text-gray-600 font-bold pb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="dkazi@email.com"
            className="border border-gray-400 p-2 rounded-xl w-[250px]"
          />

          <label className="text-gray-600 font-bold pb-1">Password</label>
          <input
            type="password"
            name="email"
            placeholder="******"
            className="border border-gray-400 p-2 rounded-xl w-[250px] focus:border-gray-500"
          />

          <div className="flex justify-between">
            <div className="flex">
              <input type="checkbox" className="mr-1" />
              <h1>Remember me</h1>
            </div>
            <h1 className="font-bold text-blue-600">Forgot Password?</h1>
          </div>
          <button className="font-bold bg-blue-700 p-2 text-white rounded-xl">Login</button>
          <h1 className='text-center'>Or continue with</h1>
          <div className='flex items-center justify-center'>
            <button className="mr-2 bg-blue-500 text-white font-bold rounded-md py-1 px-8">Twitter</button>
            <button className="mr-2 bg-black text-white font-bold rounded-md px-8 py-1">Github</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
