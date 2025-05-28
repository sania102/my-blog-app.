// pages/index.js
import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>My Blog</h1>
      <Link href="/add" className={styles.addLink}>Add New Blog</Link>
      {blogs.length === 0 ? (
        <p>No blogs yet!</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 100)}...</p>
            <p><strong>Date:</strong> {blog.date}</p>
            <Link href={`/blog/${blog.id}`} className={styles.readMore}>Read More</Link>
          </div>
        ))
      )}
    </div>
  );
}
