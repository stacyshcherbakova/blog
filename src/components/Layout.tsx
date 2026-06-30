import { Link, Outlet } from 'react-router-dom';

const socials = [
  { label: 'Email', href: 'mailto:stacy.shcherbakova@icr.ac.uk' },
  { label: 'GitHub', href: 'https://github.com/stacyshcherbakova' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stacy-shcherbakova-684552127/' },
  { label: 'X', href: 'https://x.com/segvoid' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0002-1139-6787' },
];

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
          <nav className="nav">
            <a className="nav-link" href="https://stacyshcherbakova.github.io/">← Portfolio</a>
          </nav>
        </div>
      </header>

      <main className="page-wrap">
        <Outlet />
      </main>

      <footer className="site-footer">
        <span>London, UK</span>
        <span className="footer-sep">·</span>
        {socials.map((social, i) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel={social.href.startsWith('mailto:') ? undefined : 'noreferrer'}
          >
            {social.label}{i < socials.length - 1 && <span className="footer-sep">·</span>}
          </a>
        ))}
      </footer>
    </div>
  );
}
