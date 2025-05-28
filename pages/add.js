// pages/add.js

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function AddBlog() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!title || !content || !date) {
      alert('Please fill in all fields');
      return;
    }

    const newBlog = {
      id: Date.now(),
      title,
      content,
      date,
      summary: content.length > 100 ? content.substring(0, 100) + '...' : content,
    };

    // Save to localStorage
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    storedBlogs.unshift(newBlog);
    localStorage.setItem('blogs', JSON.stringify(storedBlogs));

    alert('Blog added successfully!');
    router.push('/');
  };

  return (
    <div className="container">
      <h1>Add New Blog</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter blog title"
          required
        />

        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Enter blog content"
          rows={8}
          required
        ></textarea>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />

        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}
