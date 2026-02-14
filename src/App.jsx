import { Link } from "react-router-dom";
import "./App.css";
import PostsDetail from "./PostsDetail";

export default function App({ src }) {
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString("ja-JP");
  };

  return (
    <div className="bg-white min-h-screen min-w-screen">
      <h1 className="text-black flex justify-center">記事一覧</h1>

      {src.map((posts) => (
        <Link
          to={`/posts/${posts.id}`}
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
        </Link>
      ))}
    </div>
  );
}
