import Menu from "@/components/Menu";
import { fetchPost } from "@/lib/api";
import SingleArticle from "../components/SingleArticle";


export default async function Article({ params }) {

  const post = await fetchPost(params.id);

  return (
      <div className="layout">
        <Menu />
        <div className="content">
          <SingleArticle post={post} showBackLink />
        </div>
      </div>
  );
}
