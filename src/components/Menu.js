"use client";
import { useState, useEffect } from "react";
import { fetchPosts } from "@/lib/api";
import styles from "./Menu.module.css";

export default function Menu() {
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((data) => setRecentPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>Blogguess</div>

      <button className={styles.nav__about_button}>About</button>

      <ul className={styles.nav__recent_posts}>
        <li className={styles.nav__recent_post_item_title}>Recent Posts</li>

        {recentPosts.slice(0, 4).map((post) => (
          <li key={post.id} className={styles.nav__recent_post_item}>
            <a href={`/article/${post.id}`} className={styles.nav__recent_post_link}>
              {post.title}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.nav__about_section}>
        <h3 className={styles.nav__about_title}>About</h3>
        <a href="#" className={styles.nav__author_link}>Author Biography</a>
        <div className={styles.nav__socials}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
              className={styles.nav__icon}
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
