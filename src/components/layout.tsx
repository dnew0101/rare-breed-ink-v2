import React from 'react';
import { Link } from 'gatsby';
import '../styles/global.css';

interface LayoutProps {
    pageTitle: string;
    children: React.ReactNode;
}

const Layout = ({ pageTitle, children }: LayoutProps) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
        <main>
            <h1>{pageTitle}</h1>
            {children}
        </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Rare Breed Ink</p>
      </footer>
    </div>
  );
};

export default Layout;