import { useState } from 'react'
import './App.css'

function App() {

  const posts = [
    {
      id: 1,
      image: 'https://picsum.photos/1000/400',
      title: 'Primeiro Post',
      date: '22 de Maio de 2025',
      description: 'Este é o começo de uma jornada incrível pelo mundo da tecnologia.'
    },
    {
      id: 2,
      image: 'https://picsum.photos/1000/500',
      title: 'Segundo Post',
      date: '20 de Maio de 2025',
      description: 'Explorando ideias criativas para desenvolver aplicações web modernas.'
    },
    // Adicione mais posts conforme necessário
  ];

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
                <p className="post__description">{post.description}</p>
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
