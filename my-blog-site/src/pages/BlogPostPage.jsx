import { useParams, Link } from 'react-router-dom';
import './BlogPostPage.css';
import React, { useEffect, useState } from 'react';

function BlogPostPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`/api`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        const found = data.find(b => b.id.toString() === id);
        setBlog(found);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="post-page">Loading...</div>;
  if (error) return <div className="post-page">Error: {error}</div>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="post-page">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.content}</p>
      <Link to="/">← Back to Blogs</Link>
    </div>
  );
}

export default BlogPostPage;
