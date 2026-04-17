import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="hero-stack">
          <p className="site-name">Stacy Shcherbakova</p>
          <Link to="/" className="blog-title-link">
            <h1>Blog</h1>
          </Link>
          <p className="tagline">Posts, notes, and thoughts</p>
        </div>
      </header>

      <main className="page-wrap">
        <Outlet />
      </main>
    </div>
  );
}
