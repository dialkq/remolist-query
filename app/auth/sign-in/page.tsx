"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/firebase/googleConfig";
import { MouseEvent, FC } from "react";

const Page: FC = () => {
  const router = useRouter();
  const handleGoogleSignIn = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const user = await signInWithGoogle();
    if (user) {
      router.push("/discover/movie");
    } else {
      alert("Gagal login dengan Google. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex w-full mx-auto flex-col items-center mt-5 sm:mt-10">
      <div className="w-full rounded-lg border-double border-4 border-black md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
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

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              ></input>
            </div>

            {/* FORGOT PASSWORD? */}
            <div className="flex items-center justify-between">
              {/* SIGN WITH GOOGLE */}
              <button
                className="text-sm text-blue-400 font-medium text-primary-600 hover:underline dark:text-primary-500"
                type="button"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </button>
              <Link
                href="/auth/forgot-password"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full text-white font-mono text-base bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:outline-none focus:ring-indigo-700 font-medium rounded-lg py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Submit
            </button>

            {/* SIGN UP LINK */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                href="/auth/sign-up"
                className="font-medium text-indigo-600 font-mono hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Page;
