"use client";

import Image from 'next/image';
import Link from 'next/link'
import LeftArrowIcon from "./LeftArrow";
import styles from "./SingleArticle.module.css";

export default function SingleArticle({ post, showBackLink = false }) {
  if (!post) return <p>Carregando...</p>;

  return (
    <article className={styles.post}>
      <Image
        className={styles.post__image}
        src={post.image || "/images/placeholder-1000x400.jpg"}
        alt={post.coverImage?.alt || "Blog Destaque"}
        width={1000}
        height={400}
        priority
      />

      {showBackLink && (
        <Link href={`/`} className={styles.post__back} title="Voltar para o artigo">
          <LeftArrowIcon /> Voltar
        </Link>
      )}

      <div className={styles.post__info}>
        <h1 className={styles.post__title}>{post.title}</h1>
        <p className={styles.post__meta}>
          Publicado em {new Date(post.publishedAt).toLocaleDateString("pt-BR")} por {post.author}{" "}
          · {post.readTime} min de leitura
        </p>

        <p className={styles.post__description}>{post.description}</p>

        <div className={styles.post__content}>
          {post.content?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <ul className={styles.post__tags}>
          {post.tags?.map((tag, index) => (
            <li key={index} className={styles.tag}>
              #{tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
