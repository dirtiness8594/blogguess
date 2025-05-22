
import './App.css'
import { useState, useEffect } from 'react';


function App() {


  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 2;

  useEffect(() => {
    fetch('https://blogguess-23eb1-default-rtdb.firebaseio.com/articles.json')
      .then(res => res.json())
      .then(data => {
        const formattedPosts = Object.values(data).map(post => ({
          id: post.id,
          title: post.title,
          image: post.coverImage?.url || '',
          date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : '',
          content: Array.isArray(post.content) ? post.content : []
        }));
        setPosts(formattedPosts);
      })
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
      });
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
      <div className="layout">
        <nav className="nav">
          <div className="nav__logo">Blogguess</div>

          <button className="nav__about-button">About</button>

          <ul className="nav__recent-posts">
            <li className="nav__recent-post-item-title">Recent Posts</li>

            <li className="nav__recent-post-item">Descover the best</li>
            <li className="nav__recent-post-item">Tips, tips, tips, why</li>
            <li className="nav__recent-post-item">Exploring Savana.</li>
            <li className="nav__recent-post-item">Collaboration Magic</li>
          </ul>

          <div className="nav__about-section">
            <h3 className="nav__about-title">About</h3>
            <a href="#" className="nav__author-link">Author Biography</a>
            <div className="nav__socials">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="nav__icon" />
              </a>
            </div>
          </div>
        </nav>

        <main className="content">
        {currentPosts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} className="post__image" />
            <div className="post__info">
              <h2 className="post__title">{post.title}</h2>
              <p className="post__date">{post.date}</p>
              <div className="post__description">
                {post.content.map((paragraph, index) => (
                  <p key={index} className="">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
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

        <footer className='footer'>
          Designed by Me
        </footer>
      </main>
      </div>

    </>
  )
}

export default App
