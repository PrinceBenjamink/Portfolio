export default function Footer() {
  return (
    <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', padding: '2.5rem 6%' }}>
      <p style={{ margin: 0 }}><span>K. Prince Benjamin</span></p>
      <div style={{ position: 'absolute', right: '6%', display: 'flex', gap: '1.2rem' }}>
        <a href="https://github.com/PrinceBenjamink" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '1.3rem', transition: 'color .2s' }} onMouseEnter={e => e.target.style.color='var(--accent2)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>
          <i className="fab fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/prince-benjamin-k-4a1a73333/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', fontSize: '1.3rem', transition: 'color .2s' }} onMouseEnter={e => e.target.style.color='var(--accent2)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>
          <i className="fab fa-linkedin" />
        </a>
        <a href="mailto:princebenjamin13062006@gmail.com" style={{ color: 'var(--muted)', fontSize: '1.3rem', transition: 'color .2s' }} onMouseEnter={e => e.target.style.color='var(--accent2)'} onMouseLeave={e => e.target.style.color='var(--muted)'}>
          <i className="fas fa-envelope" />
        </a>
      </div>
    </footer>
  );
}
