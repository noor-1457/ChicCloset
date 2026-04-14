import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Logo */}
      <h1 className="text-4xl font-bold text-red-400 mb-6">ChicCloset</h1>

      {/* Card */}
      <div className="w-[350px] bg-white shadow-lg rounded-xl p-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-center mb-4">
          Sign in or create account
        </h2>

        {/* Input */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-600">
            Enter mobile number or email
          </label>

          <input
            type="text"
            placeholder="Enter email or phone"
            className="border border-gray-300 rounded-md px-3 py-2 
            focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        {/* Button */}
        <button
          className="w-full mt-5 bg-red-400 text-white py-2 rounded-md 
        hover:bg-red-600 transition duration-300"
        >
          Continue
        </button>

        {/* Terms */}
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to ChicCloset's Conditions of Use and Privacy
          Notice.
        </p>

        {/* Footer */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span className="text-red-400 cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
