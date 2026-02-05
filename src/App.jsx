import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function PostsList({ src }) {
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString("ja-JP");
  };

  return (
    <div className="bg-white">
      <header className="flex justify-between bg-[#333333] min-h-[5vh] items-center">
        <p>Blog</p>
        <p>問い合わせ</p>
      </header>

      {src.map((posts) => (
        <div key={posts.id} className="flex">
          <img src={posts.thumbnailUrl} className="w-100px" />
          <ul className="text-black">
            <li>
              {formatDate(posts.createdAt)},{posts.categories}
            </li>
            <li>{posts.title}</li>
            <li>{posts.content}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
