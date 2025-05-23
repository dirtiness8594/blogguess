"use client";

import SingleArticle from "@/app/article/components/SingleArticle";
import { fetchPosts } from "@/lib/api";
import { useState, useEffect } from "react";
import styles from "./Articles.module.css";

export default function Articles() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 2;

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .catch(err => console.error(err));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  }

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  }

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {currentPosts.map(post => (
        <SingleArticle key={post.id} post={post} />
      ))}

      <section className={styles.pagination}>
        <div className={styles.pagination__prev}>
          {currentPage > 1 && (
            <button
              className={styles.pagination__link}
              onClick={goToPrevPage}
            >
              Previous Page
            </button>
          )}
        </div>

        <div className={styles.pagination__numbers}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`${styles.pagination__number} ${currentPage === i + 1 ? styles.active : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <div className={styles.pagination__next}>
          {currentPage < totalPages && (
            <button
              className={styles.pagination__link}
              onClick={goToNextPage}
            >
              Next Page
            </button>
          )}
        </div>
      </section>

    </>
  );
}
