import "./App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between bg-[#333333]  items-center p-4 ">
      <Link to="#" className="text-white no-underline font-bold">
        Blog
      </Link>
      <Link to="#" className="text-white no-underline font-bold">
        問い合わせ
      </Link>
    </header>
  );
}
