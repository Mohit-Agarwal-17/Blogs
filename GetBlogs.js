import axios from 'axios';
import { useEffect, useState } from 'react';

const GetBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    axios.get('http://localhost:4000/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default GetBlogs;
