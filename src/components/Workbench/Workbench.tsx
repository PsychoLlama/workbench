import React from 'react';
import * as styles from './Workbench.css';
import { Link } from 'gatsby';

export const Workbench: React.FC = () => {
  return (
    <main role="main">
      <h1 className={styles.header}>Workbench</h1>
      <ul className={styles.launchers}>
        <li>
          <Link to="/record" className={styles.launcher}>
            Screen Recording
          </Link>
        </li>
      </ul>
    </main>
  );
};
