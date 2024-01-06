import axios from "axios";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Card from "./card";
import Skeleton from "./skeleton";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const AllItems = ({activeTab}) => {
  const { data, isLoading, error } =
    activeTab === "All Items"
      ? useSWR(`api/products`, fetcher)
      : useSWR(`api/products?category=${activeTab}`, fetcher);

  return (
    <div className="grid grid-cols-[repeat(4,1fr)] gap-x-24 gap-y-10 px-40 mt-10">
      {isLoading
        ? new Array(20).fill(0).map((ele) => <Skeleton />)
        : data&&data.map((ele, id) => (
          <Card title={ele.title} image={ele.image} price={ele.price} />
        ))}
    </div>
  );
};

export default AllItems;
