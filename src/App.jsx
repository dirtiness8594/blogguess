
import './App.css'
import { useState, useEffect } from 'react';


function App() {


  const [posts, setPosts] = useState([]);
  console.log("Data ", posts)

  useEffect(() => {
    fetch('https://blogguess-23eb1-default-rtdb.firebaseio.com/articles.json')
      .then(res => res.json())
      .then(data => {
        // Convertendo o objeto retornado em array
        const formattedPosts = Object.values(data).map(post => ({
          id: post.id,
          title: post.title,
          image: post.coverImage?.url || '',
          date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('pt-BR') : '',
          content: post.content || []
        }));

        setPosts(formattedPosts);
      })
      .catch(error => {
        console.error('Erro ao buscar posts:', error);
      });

  }, []);

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
          {posts.map(post => (
            <div key={post.id} className="post">
              <img src={post.image} alt={post.title} className="post__image" />
              <div className="post__info">
                <h2 className="post__title">{post.title}</h2>
                <p className="post__date">{post.date}</p>

                <div className="post__description">
                  {post.content?.map((paragraph, index) => (
                    <p key={index} className="">{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <section className="pagination">
            <div className="pagination__prev">
              <span className="pagination__link">Previous Page</span>
            </div>

            <div className="pagination__numbers">
              <span className="pagination__number">1</span>
              <span className="pagination__number">2</span>
              <span className="pagination__number">3</span>
              <span className="pagination__number">4</span>
            </div>

            <div className="pagination__next">
              <span className="pagination__link">Next Page</span>
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
