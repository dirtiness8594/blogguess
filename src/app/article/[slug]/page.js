import Menu from "@/components/Menu";
import { fetchPostBySlug } from "@/lib/api";
import SingleArticle from "../components/SingleArticle";
import styles from "../../../components/Main.module.css"

export async function generateMetadata({ params }) {
  const post = await fetchPostBySlug(params.slug);

  return {
    title: `${post.title} | Blogguess`,
    description: post.description,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.coverImage?.url],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage?.url],
    },
  };
}

export default async function Article({ params }) {

  const post = await fetchPostBySlug(params.slug);

  return (
    <div className="layout">
      <Menu />
      <div className={styles.content}>
        <SingleArticle post={post} showBackLink />
      </div>
    </div>
  );
}
