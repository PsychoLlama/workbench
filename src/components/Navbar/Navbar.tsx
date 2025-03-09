import React from 'react';
import * as styles from './Navbar.css';
import { FaGithub } from 'react-icons/fa';

interface NavbarProps {
  title: string;
}

export const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.header}>{title}</h1>
      <a
        href="https://github.com/PsychoLlama/workbench"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        aria-label="View source on GitHub"
      >
        <FaGithub />
      </a>
    </nav>
  );
};
