// data/blogs.js
let blogs = [];

export function getBlogs() {
  return blogs;
}

export function addBlog(blog) {
  blogs.unshift(blog);
}
