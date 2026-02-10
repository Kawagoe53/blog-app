import { Fragment, useState } from "react";
import "./App.css";

export default function Header() {
  return (
    <header className="flex justify-between bg-[#333333]  items-center p-4 ">
      <a to="#" className="text-white no-underline font-bold">
        Blog
      </a>
      <a to="#" className="text-white no-underline font-bold">
        問い合わせ
      </a>
    </header>
  );
}
