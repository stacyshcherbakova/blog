import { Link, Navigate, useParams } from 'react-router-dom';
import { posts } from '../data/posts';

export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  return (
    <section className="page-card">
      <Link to="/" className="back-link">← All posts</Link>
      <p className="eyebrow" style={{ marginTop: '18px' }}>{post.date}</p>
      <h2>{post.title}</h2>
      <div className="post-body">
        {post.content.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
