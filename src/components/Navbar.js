import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      
      {/* LEFT - LOGO */}
      <span className="navbar-logo">Divya Sri</span>

      {/* CENTER - LINKS */}
      <ul className="navbar-links">
        <li>
          <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>

        <li>
          <a href="mailto:ndivyasri2@gmail.com">Contact</a>
        </li>
      </ul>

      {/* RIGHT - GITHUB */}
      <a
        href="https://github.com/divyasrivarma"
        target="_blank"
        rel="noreferrer"
        className="navbar-github"
      >
        GitHub
      </a>

    </nav>
  );
}