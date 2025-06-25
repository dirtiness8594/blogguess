"use client";

import Image from 'next/image';
import Link from 'next/link';
import LeftArrowIcon from "./LeftArrow";
import styles from "./SingleArticle.module.css";
import ContentRenderer from './ContentRenderer';


export default function SingleArticle({ post, showBackLink = false }) {
  if (!post) return <p>Carregando...</p>;

  const {
    title,
    image,
    coverImage,
    date,
    author,
    readTime,
    description,
    content,
    tags
  } = post;

  return (
    <article className={styles.post}>
      <Image
        className={styles.post__image}
        src={image || "/images/placeholder-1000x400.jpg"}
        alt={coverImage?.alt || "Imagem ilustrativa do artigo"}
        width={1000}
        height={400}
        priority
      />

      {showBackLink && (
        <Link href="/" className={styles.post__back} title="Voltar para a lista de artigos">
          <LeftArrowIcon /> Voltar
        </Link>
      )}

      <div className={styles.post__info}>
        <h1 className={styles.post__title}>{title}</h1>

        <p className={styles.post__meta}>
          Publicado em {date} por {author} · {readTime} min de leitura
        </p>

        {description && (
          <p className={styles.post__description}>{description}</p>
        )}

        {Array.isArray(content) && (
          <section className={styles.post__content}>
            <ContentRenderer content={content} />
          </section>
        )}

        {Array.isArray(tags) && tags.length > 0 && (
          <ul className={styles.post__tags}>
            {tags.map((tag, index) => (
              <li key={index} className={styles.tag}>
                #{tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
