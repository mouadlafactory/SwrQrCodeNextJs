import { useRouter } from "next/router";
import React from "react";
import useSWR, { mutate } from "swr";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const ProfilePage: React.FC = () => {
  const router = useRouter();
  const userName = router.query.user?.toString() || "";
  const { data, isLoading, error } = useSWR(`/user/profile/${userName}`);
  if (error) {
    if (error?.response?.status === 300) {
      return (
        <div className="flex w-full h-screen justify-center items-center">
          <div
            className="w-[70%] h-[10%] bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">{error?.response?.data?.message}</p>
                <p className="text-sm">{error?.message}</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (error?.response?.status === 400) {
      return (
        <div className="flex w-full h-screen justify-center items-center">
          <div
            className="w-[70%] h-[10%] bg-red-100 border-t-4 border-red-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
            role="alert"
          >
            <div className="flex">
              <div className="py-1">
                <svg
                  className="fill-current h-6 w-6 text-red-500 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold">User Not found </p>
                <p className="text-sm">{error?.response?.data?.message}  </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  if (isLoading) {
    return (
      <div className="bg-white flex space-x-12 p-12 justify-center items-center w-full h-screen">
        <div className="h-20 w-20 bg-gray-800 p-2 animate-spin rounded-md"></div>
      </div>
    );
  }
  return (
    <>
      <div className="w-full h-screen gap-4 flex flex-col justify-start items-center bg-gray-200">
        <div className=" w-[90%] shadow mt-5 bg-white  rounded-[15px] text-gray-900 animate-fade-right animate-delay-300">
          <div className="rounded-t-[15px] h-32 overflow-hidden animate-fade-down animate-once animate-delay-300">
            <img
              className="object-cover object-top w-full"
              src="/dark-gray-background.jpg"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden animate-fade-right animate-delay-300">
            <img
              className="object-cover object-center h-32 w-full"
              src={data?.image}
              alt="Woman looking front"
            />
          </div>
          <div className="text-center flex flex-col justify-center items-center mt-2">
            <h3 className="font-sans leading-20 text-[#0d0d0d] text-[25px] font-semibold animate-fade-left animate-once animate-delay-300">
            {data?.firstName} {data?.lastName}
            </h3>
            <div className="font-sans text-[#595b5a] text-[17px] font-medium animate-fade-up animate-delay-300">
              AR Fashion Designer at{" "}
              <span className="text-[#0d0d0d]">Shopify</span>
            </div>
            <div className="text-center font-sans text-[#595b5a] text-[17px] font-[400] w-[85%] mt-5 animate-fade-up animate-delay-300">
              I design clothes that are vintage- inspired, I have a passion for
              helping others express their creativity 👨‍💻🔴.
            </div>
          </div>

          <div className="flex p-2 justify-center items-center  flex-wrap gap-4 mt-6 mb-5">
            <Button className="animate-fade-right animate-delay-300 flex justify-between items-center gap-2 p-2 bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              <span className="text-[16px]">mouad.bounfil</span>
            </Button>
            <Button className=" animate-fade-right animate-delay-300 flex justify-between items-center gap-2 p-2 bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
              <span className="text-[16px]">mouad.nsaj</span>
            </Button>
            <Button className=" animate-fade-right animate-delay-300 flex justify-between items-center gap-2 p-2 bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <span className="text-[16px]">mouad.n</span>
            </Button>
            <Button className=" animate-fade-right animate-delay-300 flex justify-between items-center gap-2 p-2 bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="text-[16px]">mouad.nsanss</span>
            </Button>

          </div>
        </div>
        <div className="w-[100%] flex justify-center items-center flex-col bg-gray-200 ">
          <Tabs
            defaultValue="profile"
            className="w-[90%] flex justify-center items-center flex-col bg-gray-200 "
          >
            <TabsList className="w-[100%] mb-2 shadow flex justify-evenly items-center h-30 animate-fade-right animate-delay-300">
              <TabsTrigger value="profile" className="w-[20%] animate-fade-up animate-delay-300">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="about" className="w-[20%] animate-fade-up animate-delay-300">
                <svg
                  className="w-5 h-5 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </TabsTrigger>
              <TabsTrigger value="link" className="w-[20%] animate-fade-up animate-delay-300">
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 19 19"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"
                  />
                </svg>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="w-[100%] mb-5">
              <div className="bg-white p-5 rounded-2xl animate-fade-right animate-delay-300">
                <div className="font-sans leading-20 text-[#0d0d0d] text-[18px] font-[600] mb-2">
                  Contact
                </div>
                <ul className="max-w-md divide-y divide-gray-200 ">
                  <li className="pb-2 sm:pb-4 pt-2  animate-fade-up animate-delay-300">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[16px] font-medium  text-gray-500 truncate dark:text-white">
                          Phone
                        </p>
                        <p className="text-[16px] text-gray-900 truncate dark:text-gray-400">
                        {data?.phone}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-2 sm:pb-4 pt-2  animate-fade-up animate-delay-300">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[16px] font-medium  text-gray-500 truncate dark:text-white">
                          Email
                        </p>
                        <p className="text-[16px] text-gray-900 truncate dark:text-gray-400">
                        {data?.email}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-2 sm:pb-4 pt-2  animate-fade-up animate-delay-300">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[16px] font-medium  text-gray-500 truncate dark:text-white">
                          Web Site
                        </p>
                        <p className="text-[16px] text-gray-900 truncate dark:text-gray-400">
                          https://chat.openai.com/
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl mt-3 animate-fade-right animate-delay-300">
                <div className="font-sans leading-20 text-[#0d0d0d] text-[18px] font-[600] mb-2">
                  Work
                </div>
                <ul className="max-w-md divide-y divide-gray-200 ">
                  <li className="pb-2 sm:pb-4 pt-2 animate-fade-up animate-delay-300">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[16px] font-medium  text-gray-500 truncate dark:text-white">
                          Web develloper
                        </p>
                        <p className="text-[16px] text-gray-900 truncate dark:text-gray-400">
                          Full stack MERN - Next JS
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-2 sm:pb-4 pt-2 animate-fade-up animate-delay-300">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[16px] font-medium  text-gray-500 truncate dark:text-white">
                          Location
                        </p>
                        <p className="text-[16px] text-gray-900 truncate dark:text-gray-400">
                          545 8th St, San Franciscor CA 941 03,
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-2xl mt-3 animate-fade-right animate-delay-300">
                <div className="font-sans leading-20 text-[#0d0d0d] text-[18px] font-[600] mb-2">
                  Education
                </div>
                <ul className="max-w-md divide-y divide-gray-200 ">
                  <li className="pb-2 sm:pb-4 pt-2 animate-fade-up animate-delay-300">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium  text-gray-500 truncate dark:text-white text-[16px]">
                          HCI Bachelor Degree
                        </p>
                        <p className="text-[16px] text-gray-900 truncate dark:text-gray-400">
                          York University
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-[100%] shadow mb-10">
              <div className="bg-white p-5 rounded-2xl animate-fade-right animate-delay-300">
                <div className="font-sans leading-20 text-[#0d0d0d] text-[18px] font-[600] mb-2">
                  About me
                </div>
                <div className="font-sans text-[#0d0d0d] text-[17px] font-[400] w-[90%] mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
            </TabsContent>
            <TabsContent value="link" className="w-[100%] shadow mb-10">
              <div className="bg-white p-5 rounded-2xl animate-fade-right animate-delay-300">
                <div className="font-sans leading-20 text-[#0d0d0d] text-[18px] font-[600] mb-2">
                  Contact
                </div>
                <ul className="max-w-md divide-y divide-gray-200 ">
                  <li className="pb-2 sm:pb-4 pt-2">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            className="w-6 h-6 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  text-gray-500 truncate dark:text-white">
                          Phone
                        </p>
                        <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                          +212 434748374
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-2 sm:pb-4 pt-2">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            className="w-6 h-6 font-[800]"
                            data-name="1-Email"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  text-gray-500 truncate dark:text-white">
                          Email
                        </p>
                        <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                          email@flowbite.com
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="pb-2 sm:pb-4 pt-2">
                    <div className="flex items-center space-x-4 rtl:space-x-reverse">
                      <div className="flex-shrink-0">
                        <Button className="flex justify-between items-center gap-2 pl-2 pr-2 pt-5 pb-5  bg-white text-[#1d1d1d] border-2 border-solid hover:bg-gray-200 border-[#ececec] rounded-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                            />
                          </svg>
                        </Button>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium  text-gray-500 truncate dark:text-white">
                          Web Site
                        </p>
                        <p className="text-sm text-gray-900 truncate dark:text-gray-400">
                          https://chat.openai.com/
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
