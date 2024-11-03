"use client";

import React, { useEffect, useState } from "react";
import PageTitle from "./PageTitle";
import { fetchData } from "./ApiCalls";
import PostCard from "./PostCard";

type Props = {
  pageTitle?: string;
};

export default function ViewData({}: Props) {
  type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  // Then use this type in your useState hook
  const [allPostData, setAllPostData] = useState<Post[] | null>(null);

  const fetchAllPosts = async () => {
    const data = await fetchData();
    console.log({ data });
    setAllPostData(data);
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);
  console.log(allPostData);

  return (
    <div className="w-full">
      <PageTitle title="View Data" />

      <div className="mt-5 grid grid-cols-3 gap-5">
        {allPostData?.map((post) => (
          <PostCard
            key={post?.id}
            title={post?.title}
            description={post?.body}
            id={post?.id}
          />
        ))}
      </div>
    </div>
  );
}
