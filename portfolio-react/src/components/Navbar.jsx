import { useEffect, useState } from 'react';

const links = ['hero', 'about', 'skills', 'projects', 'coding-profiles', 'achievements', 'contact'];
const labels = ['Home', 'About', 'Tech Stack', 'Projects', 'Coding Profiles', 'Achievements', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      let current = 'hero';
      links.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 150) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="navbar" className={scrolled ? 'scrolled' : ''}>
      <div className="logo">Prince</div>
      <ul className={open ? 'open' : ''}>
        {links.map((id, i) => (
          <li key={id}>
            <a href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setOpen(false)}>
              {labels[i]}
            </a>
          </li>
        ))}
      </ul>
      <div className="hamburger" onClick={() => setOpen(o => !o)}>
        <i className="fas fa-bars" />
      </div>
    </nav>
  );
}
