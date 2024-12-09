import React from 'react';
import * as styles from './_index.css';
import { HeadFC, Link } from 'gatsby';

const Workbench: React.FC = () => {
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

export const Head: HeadFC = () => (
  <>
    <title>Workbench</title>
  </>
);

export default Workbench;
