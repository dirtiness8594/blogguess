"use client";

import LeftArrowIcon from "./LeftArrow";

export default function SingleArticle({ post, showBackLink = false }) {
  if (!post) return <p>Carregando...</p>;

  return (
    <div key={post.id} className="post">
      <img src={post.image} alt={post.title} className="post__image" />

      {showBackLink && (
        <a className="post__back" href="/" title="Back to navigation">
          <LeftArrowIcon /> Back to navigation
        </a>
      )}

      <div className="post__info">
        <h2 className="post__title">{post.title}</h2>
        <p className="post__date">{post.date}</p>
        <div className="post__description">
          {post.content?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
