"use client";
import { useState, useEffect } from "react";
import { fetchPosts } from "@/lib/api";

export default function Menu() {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
      fetchPosts()
        .then((data) => setRecentPosts(data))
        .catch((err) => console.error(err));
    }, []);
    return (
        <nav className="nav">
            <div className="nav__logo">Blogguess</div>

            <button className="nav__about-button">About</button>

            <ul className="nav__recent-posts">
                <li className="nav__recent-post-item-title">Recent Posts</li>

                {recentPosts.slice(0, 4).map((post) => (
          <li key={post.id} className="nav__recent-post-item">
             <a href={`/article/${post.id}`} className="nav__recent-post-link">
        {post.title}
      </a>
          </li>
        ))}
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
