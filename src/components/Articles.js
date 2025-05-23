"use client";

import SingleArticle from "@/app/article/components/SingleArticle";
import { fetchPosts } from "@/lib/api";
import { useState, useEffect } from "react";
{/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
         */}


export default function Articles() {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const postsPerPage = 2;

    useEffect(() => {
        fetchPosts()
            .then(data => setPosts(data))
            .catch(err => console.error(err))
    }, []);

    // Calcular índice de início e fim dos posts da página atual
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Número total de páginas
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Funções para mudar página
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

            <section className="pagination">
                <div className="pagination__prev">
                    <button className="pagination__link" onClick={goToPrevPage} disabled={currentPage === 1}>
                        Previous Page
                    </button>
                </div>

                <div className="pagination__numbers">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => goToPage(i + 1)}
                            className={`pagination__number ${currentPage === i + 1 ? 'active' : ''}`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <div className="pagination__next">
                    <button className="pagination__link" onClick={goToNextPage} disabled={currentPage === totalPages}>
                        Next Page
                    </button>
                </div>
            </section>
        </>
    );
}
