import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <div
      className="border border-slate-300 p-4 rounded-md shadow-sm
    bg-white"
    >
      <Link href={`/posts/${props.slug}`}>
        <h1 className="text-blue-600/75 font-bold uppercase">{props.title}</h1>
      </Link>
      <p className="text-slate-700">{props.subtitle}</p>
      <hr className="m-3"></hr>
      <p className="text-sm text-slate-400">📅 {props.date}</p>
    </div>
  );
};

export default PostPreview;
