import React, { useEffect, useState } from 'react';

function WordPressPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <div>
      <h1>WordPress Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts found.</p>
      )}
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to My Websites</h1>
      <p>This is a simple React website using Bootstrap for styling.</p>
      <WordPressPosts />
    </div>
  );
};

export { WordPressPosts };
export default HomePage;
