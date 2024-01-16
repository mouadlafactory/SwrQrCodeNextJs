import { useRouter } from "next/router";
import React from "react";
import useSWR, { mutate } from "swr";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";

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
  }
  if (isLoading) {
    return (
      <div className="bg-white flex space-x-12 p-12 justify-center items-center w-full h-screen">
        <div className="h-20 w-20 bg-[#ffd5a1] p-2 animate-spin rounded-md"></div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className=" w-[90%] mt-16 bg-white shadow-xl rounded-lg text-gray-900">
          <div className="rounded-t-lg h-32 overflow-hidden">
            <img
              className="object-cover object-top w-full"
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Mountain"
            />
          </div>
          <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-32"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
              alt="Woman looking front"
            />
          </div>
          <div className="text-center flex flex-col justify-center items-center">
            <h3 className="font-sans leading-20 text-[#0d0d0d] text-[25px] font-semibold">
              Mouad Bounfil
            </h3>
            <div className="font-sans text-[#595b5a] text-[15px] font-medium">
              AR Fashion Designer at{" "}
              <span className="text-[#0d0d0d]">Shopify</span>
            </div>
            <div className="text-center font-sans text-[#595b5a] text-[15px] font-900 w-[80%] mt-5">
              I design clothes that are vintage- inspired, I have a passion for
              helping others express their creativity.
            </div>
          </div>
          
          <div className="flex p-2 justify-center items-center  flex-wrap gap-4 mt-6 mb-10">
            <Button className=" p-2 bg-white text-[#1d1d1d] border-2 border-solid border-[#ececec] rounded-[10px]">
              mouad.n
            </Button>
            <Button className=" p-2 bg-white text-[#1d1d1d] border-2 border-solid border-[#ececec] rounded-[10px]">
              mouad.itdkasa
            </Button>
            <Button className=" p-2 bg-white text-[#1d1d1d] border-2 border-solid border-[#ececec] rounded-[10px]">
              mouad.su
            </Button>
            <Button className=" p-2 bg-white text-[#1d1d1d] border-2 border-solid border-[#ececec] rounded-[10px]">
              mouad.itdkasass
            </Button>
            <Button className=" p-2 bg-white text-[#1d1d1d] border-2 border-solid border-[#ececec] rounded-[10px]">
              mouad.itdkas
            </Button>
          </div>

          <div className="p-4 border-t mx-8 mt-2">
            <Button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">
              Follow
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
