"use client";

import Image from 'next/image';
import Link from 'next/link'
import LeftArrowIcon from "./LeftArrow";

export default function SingleArticle({ post, showBackLink = false }) {
  if (!post) return <p>Carregando...</p>;

  console.log("POS " , post)

  return (
    <article className="post">
      <Image
        className="post__image"
        src={post.image || "/images/placeholder-1000x400.jpg"}
        alt={post.coverImage?.alt || "Blog Destaque"}
        width={100}
        height={400}
        priority
        />
        {showBackLink && (
         <Link href={`/`} className="post__back" title="Voltar para o artigo">
           <LeftArrowIcon /> Voltar
         </Link>
       )}
      <div className="post__info">
        <h1 className="post__title">{post.title}</h1>
        <p className="post__meta">
          Publicado em {new Date(post.publishedAt).toLocaleDateString("pt-BR")} por {post.author}
          {" · "} {post.readTime} min de leitura
        </p>
        <p className="post__description">{post.description}</p>

        <div className="post__content">
          {post.content?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className="post__tags">
          {post.tags?.map((tag, index) => (
            <li key={index} className="tag">#{tag}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
