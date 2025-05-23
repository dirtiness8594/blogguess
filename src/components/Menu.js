
export default function Menu() {
    return (
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
    );
}
