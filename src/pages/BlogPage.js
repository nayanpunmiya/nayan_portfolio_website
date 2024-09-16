import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog posts from the backend API
    axios.get('/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div className="blog">
      <h1>Blog</h1>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div className="blog-post" key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
            <small>Published on {new Date(blog.date).toDateString()}</small>
          </div>
        ))
      ) : (
        <p>No blog posts available.</p>
      )}
    </div>
  );
};

export default BlogPage;
