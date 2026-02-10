import { useParams } from "react-router-dom";
import "./App.css";

export default function PostsDetail() {
  const { posts } = useParams();

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
