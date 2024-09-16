import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* Footer Section */}
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
        <p>© 2024 Nayan Punamiya. All Rights Reserved.</p>
        <p>
          <a href="https://www.linkedin.com/in/nayanpunamiya" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a> |{' '}
          <a href="https://github.com/nayanpunmiya" target="_blank" rel="noopener noreferrer">
            GitHub
          </a> |{' '}
          <a href="mailto:punmiyanayan@gmail.com">Email</a>
        </p>
      </footer>
    </div>
  );
};

export default Navbar;
