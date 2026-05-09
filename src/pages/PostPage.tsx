import { Link, Navigate, useParams } from 'react-router-dom';
import { posts, type PostBlock } from '../data/posts';

function renderBlock(block: PostBlock, index: number) {
  switch (block.type) {
    case 'heading':
      return <h3 key={index} className="post-subtitle">{block.text}</h3>;
    case 'list':
      return (
        <ul key={index} className="post-list">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ul>
      );
    case 'code':
      return (
        <pre key={index} className="code-block">
          <code>{block.code}</code>
        </pre>
      );
    case 'paragraph':
    default:
      return <p key={index}>{block.text}</p>;
  }
}

export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/" replace />;

  return (
    <section className="page-card">
      <Link to="/" className="back-link">← All posts</Link>
      <p className="eyebrow post-meta" style={{ marginTop: '18px' }}>{post.date}</p>
      <h2 className="post-title">{post.title}</h2>
      <div className="post-body">
        {post.content.map((block, i) => renderBlock(block, i))}
      </div>
    </section>
  );
}
