import React from 'react';
import * as styles from './Workbench.css';
import { Link } from 'gatsby';
import { FaGithub } from 'react-icons/fa';

interface AppInfo {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
}

const apps: AppInfo[] = [
  {
    id: 'screen-recorder',
    title: 'Screen Recorder',
    description: 'Record your screen and download the video as an .mp4 file.',
    icon: '🎥',
    path: '/record',
  },
];

export const Workbench: React.FC = () => {
  return (
    <main role="main" className={styles.container}>
      <nav className={styles.navbar}>
        <h1 className={styles.header}>Workbench</h1>
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

      <div>
        <p className={styles.subheader}>
          A collection of productivity tools and experiments.
        </p>

        <div className={styles.apps}>
          {apps.map((app) => (
            <div key={app.id} className={styles.appCard}>
              <Link to={app.path} className={styles.appLink}>
                <div className={styles.appIconContainer}>{app.icon}</div>
                <div className={styles.appContent}>
                  <h2 className={styles.appTitle}>{app.title}</h2>
                  <p className={styles.appDescription}>{app.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
