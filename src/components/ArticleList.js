import React from 'react'
import Article from './Article';

const ArticleList = ({ posts }) => {
    console.log(posts)
    if (!posts || posts.length === 0) {
        return <div>No posts to display</div>;
      }
  return (
    <main>
    {posts.map((post) => (
          <Article 
            key={post.id}
            title={post.title}
            formatDate={post.date}
            preview={post.preview}
            />
    ))}    
    </main>
)}

export default ArticleList