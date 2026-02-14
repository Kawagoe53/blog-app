import { useParams, Link } from "react-router-dom";
import "./App.css";
import "./index.css";

export default function PostsDetail({ src }) {
  const { id } = useParams();

  // idに該当する記事を探す
  const post = src.find((p) => p.id === Number(id));

  // formatDate関数を追加
  const formatDate = (createdAt) => {
    const date = new Date(createdAt);
    return date.toLocaleDateString("ja-JP");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white">
      <img
        src={post.thumbnailUrl}
        className="w-full h-auto object-cover mb-4"
      />
      <div className="text-black">
        <p className="text-sm text-gray-600">
          {formatDate(post.createdAt)}, {post.categories}
        </p>
        <h1 className="font-bold text-2xl my-4">{post.title}</h1>
        <div
          className="text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
        <Link to="/">
          <p className="text-blue-600 mb-8">一覧へ戻る</p>
        </Link>
      </div>
    </div>
  );
}
