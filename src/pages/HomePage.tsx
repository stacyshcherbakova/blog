import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export function HomePage() {
  return (
    <section className="page-card">
      <p className="eyebrow">All posts</p>
      <h2>Writing</h2>

      <div className="stack-list">
        {posts.map((post) => (
          <article key={post.slug} className="item-card">
            <Link to={`/post/${post.slug}`} className="post-link">
              <strong>{post.title}</strong>
            </Link>
            <p className="muted-line">{post.date}</p>
            <p>{post.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
