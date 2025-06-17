import './BlogPage.css';
import { Link } from 'react-router-dom';
//import blogs from '../data/blogs';
import heroImage from '../assets/blog-hero.png';
import React,{useState, useEffect} from 'react'; 

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api") // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="blog-page">Loading...</div>;
  if (error) return <div className="blog-page">Error: {error}</div>;

  return (
    <div className="blog-page">
      <img src={heroImage} alt="Blog" className="hero-image" />
      <h1>Latest Blogs</h1>
      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-item">
            <h2>{blog.title}</h2>
            <p>{blog.summary}</p>
            <Link to={`/post/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
