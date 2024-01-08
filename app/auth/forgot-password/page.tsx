import Link from "next/link";

const Page = () => {
  return (
    <div className="flex w-full mx-auto flex-col items-center mt-5 sm:mt-10">
      <div className="w-full rounded-lg border-double border-4 border-black md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Enter your email
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@mail.com"
                required
              ></input>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full text-white font-mono text-base bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-700 font-medium rounded-lg py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send
            </button>

            <div className="w-full flex justify-evenly">
              {/* SIGN IN LINK */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {" "}
                <Link
                  href="/auth/sign-in"
                  className="font-medium text-indigo-600 font-mono hover:underline dark:text-primary-500"
                >
                  Sign in
                </Link>
              </p>
              {/* SIGN UP LINK */}
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {" "}
                <Link
                  href="/auth/sign-up"
                  className="font-medium text-indigo-600 font-mono hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
