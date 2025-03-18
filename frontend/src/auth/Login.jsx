import React from "react";

const Login = () => {
  return (

    // bg-[url('https://i.pinimg.com/736x/cc/48/05/cc4805345f95396e08a5a6947455df2a.jpg')] bg-center bg-cover
    <div className="flex justify-center items-center min-h-screen w-full bg-blue-300  p-4">
      <div className="bg-white w-full max-w-screen-md lg:max-w-2xl rounded-2xl shadow-lg flex  md:flex-row">
        {/* Left Side - Image (Hidden on Small Screens) */}
        <div className="w-full md:w-1/2 block max-[770px]:hidden">
          <img
            src="https://s3-alpha-sig.figma.com/img/cdfd/c551/f9c6d619820566f61a6c7f8d4d236ae0?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ijmrp2JWfIXbn7jHpWJrH6KlsGXqcuPPvnyT7-rQW4s5c0VJsTFHA2bOeth-N-lScw5qVjfSvvmQKuEZqZbp82UJbGxxwI9cInc-qkbtrLgyxfZWwAigWIoOOLXI4wy2OWMS9~WBC4-P84KPOjXbDOwQhxw0r9YmZUHH0NtzXeOfhE761hd8zXgCANKaHDyoL-yEFq8ubTb7REm4JRth3zGunQldr3h9MvOz5z5JmVEMXrcvRvVxm9tio1fW76c26NannyLZ5AP4U3aHjSkrS-rqxcflzjj7n2UQmD1mRQhoCd6bhXycNyWmTalJ4nSoroksc6kqRYMYEHKNS6XVTQ__"
            alt="Login Image"
            className="object-center object-cover w-full h-[300px] md:h-[440px] rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </div>
        {/* Right Side - Content (Centered Properly) */}
        <div className="w-full md:w-1/2 flex flex-col  items-center p-6">
          <div className="w-full max-w-sm text-center">
            <h2 className="text-2xl text-blue-700 font-semibold">
              Welcome Back
            </h2>
            <h6 className="mt-2 text-gray-500">Login with Email</h6>

            {/* Form Section */}
            <form
              action=""
              className="mt-8 flex flex-col items-center gap-4 w-full"
            >
              <input
                className="border-2 w-full p-2 border-blue-400 rounded-md"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="border-2 w-full p-2 border-blue-400 rounded-md"
                type="password"
                placeholder="Enter your password"
              />
              <p className="text-sm text-gray-600 self-start mt-1">
                Forgot your password?
              </p>

              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
                Login
              </button>
            </form>
            <p className="mt-5">
              Don't have account?
              <span className="font-semibold">Register Now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
