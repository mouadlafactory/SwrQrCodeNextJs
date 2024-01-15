import axios from "axios";
import React from "react";
import useSWR, { mutate } from "swr";
import { TableDemo } from "./TableDemo";
import Navbar from "./Navbar";
import { useRouter } from "next/router";



export function Home({ usersFromServer }: any) {
  const { data, isLoading } = useSWR("/users");
  if (isLoading) {
    return (
      <div className="bg-white flex space-x-12 p-12 justify-center items-center w-full h-screen">
        <div className="h-20 w-20 bg-[#ffd5a1] p-2 animate-spin rounded-md"></div>
      </div>
    );
  }
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
