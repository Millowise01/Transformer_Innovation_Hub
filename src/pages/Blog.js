import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Art of Upcycling: Transforming Waste into Wonder',
      excerpt: 'Discover how we turn everyday waste materials into beautiful art pieces.',
      date: '2025-01-15'
    },
    {
      id: 2,
      title: 'Sustainable Living: Small Changes, Big Impact',
      excerpt: 'Learn about simple ways to make your lifestyle more environmentally friendly.',
      date: '2025-01-10'
    },
    {
      id: 3,
      title: 'Community Artists: Spotlight on Local Talent',
      excerpt: 'Meet the talented artists who bring our sustainable vision to life.',
      date: '2025-01-05'
    }
  ];

  return (
    <div className="container">
      <h1>Our Blog</h1>
      <div className="blog-posts">
        {posts.map(post => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.excerpt}</p>
            <button className="button">Read More</button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;