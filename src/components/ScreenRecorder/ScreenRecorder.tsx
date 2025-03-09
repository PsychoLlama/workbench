import React from 'react';
import * as styles from './ScreenRecorder.css';
import { useScreenRecordingSupport, useScreenRecorder } from './hooks';
import { Navbar } from '../Navbar';
import { ErrorMessage } from './ErrorMessage';
import { FaDownload, FaCheck } from 'react-icons/fa';
import cx from 'classnames';

export const ScreenRecorder: React.FC = () => {
  const isSupported = useScreenRecordingSupport();
  const {
    recording,
    downloadUrl,
    downloadTitle,
    recordingTime,
    formatTime,
    recordScreen,
    stopRecording,
  } = useScreenRecorder();

  const [showCheckmark, setShowCheckmark] = React.useState(false);

  const handleDownloadClick = () => {
    setShowCheckmark(true);
    setTimeout(() => {
      setShowCheckmark(false);
    }, 1500);
  };

  if (isSupported === false) {
    return (
      <>
        <Navbar title="Screen Recorder" />
        <ErrorMessage
          title="Browser Not Supported"
          message="Your browser doesn't support the screen recording API."
        />
      </>
    );
  }

  return (
    <>
      <Navbar title="Screen Recorder" />

      <div className={styles.container}>
        <main role="main" className={styles.mainContent}>
          {recording && (
            <div className={styles.statusIndicator}>
              <div className={styles.recordingDot}></div>
              Recording in progress - {formatTime(recordingTime)}
            </div>
          )}

          {!recording && !downloadUrl && (
            <>
              <h2 className={styles.instructionsTitle}>How to use:</h2>
              <ol className={styles.instructionsList}>
                <li className={styles.instructionItem}>
                  Click "Start Recording" to begin
                </li>
                <li className={styles.instructionItem}>
                  Select which screen or window to capture
                </li>
                <li className={styles.instructionItem}>
                  Click "Stop Recording" when finished
                </li>
                <li className={styles.instructionItem}>
                  Preview and download your recording
                </li>
              </ol>
            </>
          )}

          {downloadUrl && (
            <div className={styles.videoContainer}>
              <div className={styles.videoHeader}>
                <a
                  href={downloadUrl}
                  download={downloadTitle}
                  aria-label="Download recording"
                  className={styles.videoTitle}
                  onClick={handleDownloadClick}
                >
                  {downloadTitle}
                </a>
                <a
                  href={downloadUrl}
                  download={downloadTitle}
                  aria-label="Download recording"
                  className={cx(styles.downloadButton, {
                    [styles.downloadSuccess]: showCheckmark,
                  })}
                  onClick={handleDownloadClick}
                >
                  {showCheckmark ? <FaCheck /> : <FaDownload />}
                </a>
              </div>
              <video className={styles.video} src={downloadUrl} controls />
            </div>
          )}

          {recording ? (
            <button
              className={cx(styles.button, styles.recordingButton)}
              onClick={stopRecording}
              aria-label="Stop recording"
            >
              Stop Recording
            </button>
          ) : (
            <button
              className={styles.button}
              onClick={recordScreen}
              disabled={isSupported === null}
              aria-label="Start recording"
            >
              {isSupported === null
                ? 'Checking browser support...'
                : downloadUrl
                  ? 'New Recording'
                  : 'Start Recording'}
            </button>
          )}
        </main>

        <aside className={styles.sidebar}>
          <h3 className={styles.sidebarHeader}>Past Recordings</h3>
          <div className={styles.sidebarContent}>
            Meh, I'll build this later.
          </div>
        </aside>
      </div>
    </>
  );
};
