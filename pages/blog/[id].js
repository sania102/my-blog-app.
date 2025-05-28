// pages/blog/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Detail.module.css';
import Link from 'next/link';

export default function BlogDetail() {
  const { id } = useRouter().query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
      const found = blogs.find((b) => b.id == id);
      setBlog(found);
    }
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <h1>{blog.title}</h1>
      <p className={styles.date}>Date: {blog.date}</p>
      <p>{blog.content}</p>
      <Link href="/" className={styles.back}>← Back to Home</Link>
    </div>
  );
}
