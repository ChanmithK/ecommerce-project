import React, { useState } from "react";
import { CiUser } from "react-icons/ci";
import { default as Google } from "../../../public/icons/google.svg";
import { default as Facebook } from "../../../public/icons/facebook.svg";
import { AnimatePresence, motion } from "framer-motion";

const LoginOrRgister = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginSelected, setIsLoginSelected] = useState(true);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const switchToLogin = () => {
    setIsLoginSelected(true);
  };

  const switchToRegister = () => {
    setIsLoginSelected(false);
  };

  const toggleClosModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Login = () => {
    return (
      <motion.div
        key="login"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                required
              />
            </div>

            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded accent-primary"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                >
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-gray-700 hover:underline dark:text-gray-500"
              >
                Forget Password?
              </a>
            </div>
            <button className="h-10 text-sm font-semibold bg-primary text-white hover:bg-secondary w-full mt-3 rounded-md ">
              LOGIN
            </button>
          </form>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">
              or Login With
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex gap-2 justify-center">
            <Google height={39} width={39} className="fill-gray-200" />
            <Facebook height={40} width={40} className="fill-gray-200" />
          </div>
        </div>
      </motion.div>
    );
  };

  const Register = () => {
    return (
      <motion.div
        key="register"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
      >
        {/* Modal body */}
        <div className="p-4 md:p-5">
          <form className="space-y-4" action="#">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-secondary"
              >
                Repeat Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-secondary"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="h-4 w-4 rounded accent-primary"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                >
                  I agree to the privacy policy
                </label>
              </div>
            </div>
            <button className="h-10 text-sm font-semibold bg-primary text-white hover:bg-secondary w-full mt-3 rounded-md ">
              REGISTER
            </button>
          </form>

          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">
              or Register With
            </span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex gap-2 justify-center">
            <Google height={39} width={39} className="fill-gray-200" />
            <Facebook height={40} width={40} className="fill-gray-200" />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <CiUser
        className="hover:text-primary cursor-pointer"
        onClick={toggleModal}
      />
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            id="authentication-modal"
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            tabIndex={-1}
            aria-hidden="true"
            className="fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              key="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative p-4 w-full max-w-xl max-h-full"
            >
              {/* Modal content */}
              <div className="relative bg-white rounded-lg shadow dark:bg-white">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-200">
                  <div className="flex justify-center p-4">
                    <motion.button
                      onClick={switchToLogin}
                      className={`${
                        isLoginSelected
                          ? "text-3xl font-bold text-primary"
                          : "text-sm font-medium text-gray-600"
                      } mx-2 cursor-pointer`}
                      animate={{
                        scale: isLoginSelected ? 1 : 0.9,
                        transition: { duration: 0.6 },
                      }}
                    >
                      Login
                    </motion.button>
                    <h4 className="text-sm mt-2 text-gray-400">|</h4>
                    <motion.button
                      onClick={switchToRegister}
                      className={`${
                        !isLoginSelected
                          ? "text-3xl font-bold text-primary"
                          : " text-sm font-medium text-gray-600"
                      } mx-2 cursor-pointer`}
                      animate={{
                        scale: !isLoginSelected ? 1 : 0.9,
                        transition: { duration: 0.6 },
                      }}
                    >
                      Register
                    </motion.button>
                  </div>
                  <button
                    type="button"
                    className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-300 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                    onClick={toggleClosModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {isLoginSelected ? <Login /> : <Register />}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginOrRgister;
