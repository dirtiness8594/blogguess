"use client";
import { useState, useEffect } from "react";
import { fetchPostsForMenu } from "@/lib/api";
import styles from "./Menu.module.css";

export default function Menu() {
  const [recentPosts, setRecentPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchPostsForMenu()
      .then((data) => setRecentPosts(data))
      .catch((err) => console.error(err));
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <button
        className={styles.menuToggle}
        aria-label="Toggle menu"
        onClick={toggleMenu}
        aria-expanded={isOpen}
      >
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
        <span className={isOpen ? styles.barOpen : styles.bar}></span>
      </button>

      <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}>
        <div className={styles.nav__logo}>Blogguess</div>

        <button className={styles.nav__about_button}>About</button>

        <ul className={styles.nav__recent_posts}>
          <li className={styles.nav__recent_post_item_title}>Recent Posts</li>

          {recentPosts.slice(0, 4).map((post) => (
            <li key={post.id} className={styles.nav__recent_post_item}>
              <a href={`/article/${post.slug}`} className={styles.nav__recent_post_link}>
                {post.title}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.nav__about_section}>
          <h3 className={styles.nav__about_title}>About</h3>
          <a href="#" className={styles.nav__author_link}>Author Biography</a>
          <div className={styles.nav__socials}>
            <a href="https://codeberg.org/OpenOrbit/blogguess" target="_blank" rel="noopener noreferrer">
              <img
                src="https://design.codeberg.org/logo-kit/icon_inverted.svg"
                alt="Codeberg"
                className={styles.nav__icon}
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
