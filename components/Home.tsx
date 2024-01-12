import axios from "axios";
import React from "react";
import useSWR, { mutate, trigger } from "swr";
import { AddComment } from "./AddComment";
import { TableDemo } from "./TableDemo";
import Navbar from "./Navbar";




export function Home({ usersFromServer }: any) {
  const { data, isLoading } = useSWR("/users");
  if (isLoading) {
    return (
      <div className="bg-white flex space-x-12 p-12 justify-center items-center w-full h-screen">
        <div className="h-20 w-20 bg-[#ffd5a1] p-2 animate-spin rounded-md"></div>
      </div>
    );
  }
  console.log("isLoading",isLoading)
  console.log("data",data)
  return (
    <>
    
      <div className="w-full h-screen flex  items-center flex-col">
        <Navbar />
        <TableDemo data={data} />
      </div>
    </>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await axios("/users");
  const json = res.data;
  return { usersFromServer: json };
};
