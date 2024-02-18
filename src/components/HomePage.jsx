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
  }, []);

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

// New component to fetch and display a specific WordPress page (e.g., static homepage)
function WordPressHomePage() {
  const [page, setPage] = useState(null);
  const pageId = 2; // Replace with the ID of your homepage

  useEffect(() => {
    fetch(`http://localhost:8000/wp-json/wp/v2/pages/${pageId}`)
      .then(response => response.json())
      .then(data => {
        setPage(data);
      })
      .catch(error => {
        console.error('Error fetching page: ', error);
      });
  }, [pageId]);

  return (
    <div>
      {page ? (
        <div>
          <h1>{page.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
        </div>
      ) : (
        <p>Homepage content not found.</p>
      )}
    </div>
  );
}

const HomePage = () => {
  return (
    <div className="container mt-5">
      <WordPressHomePage />
      {/* <WordPressPosts /> */}
    </div>
  );
};

export { WordPressPosts, WordPressHomePage };
export default HomePage;
