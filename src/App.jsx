import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App({ src }) {
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString("ja-JP");
  };

  return (
    <div className="bg-white min-h-screen min-w-screen">
      <header className="flex justify-between bg-[#333333]  items-center p-4 ">
        <a href="#" className="text-white no-underline font-bold">
          Blog
        </a>
        <a href="#" className="text-white no-underline font-bold">
          問い合わせ
        </a>
      </header>
      <div>
        <h1 className="text-black flex justify-center">記事一覧</h1>
      </div>

      {src.map((posts) => (
        <a
          href="#"
          key={posts.id}
          className="grid grid-cols-[200px_1fr] gap-4 border-b border-[#e5e7eb] max-w-3xl mx-auto"
        >
          <img
            src={posts.thumbnailUrl}
            className="w-fit h-30 shrink-0 object-cover m-3"
          />
          <ul className="text-black">
            <li>
              {formatDate(posts.createdAt)},{posts.categories}
            </li>
            <li className="font-bold">{posts.title}</li>
            <li
              className="text-sm1 text-gray-700 overflow-hidden line-clamp-2"
              dangerouslySetInnerHTML={{ __html: posts.content }}
            ></li>
          </ul>
        </a>
      ))}
    </div>
  );
}
