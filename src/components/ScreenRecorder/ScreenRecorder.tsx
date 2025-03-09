import React from 'react';
import * as styles from './ScreenRecorder.css';
import logger from '@holz/logger';
import { useScreenRecordingSupport } from './hooks';

export const ScreenRecorder: React.FC = () => {
  const [recording, setRecording] = React.useState(false);
  const [downloadUrl, setDownloadUrl] = React.useState<null | string>(null);
  const [downloadTitle, setDownloadTitle] = React.useState('recording.mp4');
  const [recorder, setRecorder] = React.useState<null | MediaRecorder>(null);
  const [recordingTime, setRecordingTime] = React.useState(0);
  const isSupported = useScreenRecordingSupport();
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  const startRecording = React.useCallback((stream: MediaStream) => {
    logger.info('Recording started', {
      id: stream.id,
      active: stream.active,
    });

    const recorder = new MediaRecorder(stream);
    setRecorder(recorder);
    setRecording(true);
    setRecordingTime(0);

    // Start timer
    timerRef.current = setInterval(() => {
      setRecordingTime((prev) => prev + 1);
    }, 1000);

    const chunks: Blob[] = [];

    recorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      stream.getTracks().forEach((track) => track.stop());

      setRecording(false);
      setDownloadUrl(url);
      setDownloadTitle(`screen-recording-${Date.now()}.mp4`);
      logger.info('Recording stopped', {
        id: stream.id,
        active: stream.active,
        url,
      });
    };

    recorder.start();
  }, []);

  const stopRecording = React.useCallback(() => {
    setRecording(false);
    logger.info('Finished recording');
    recorder?.stop();

    // Clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [recorder]);

  const recordScreen = React.useCallback(() => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then(startRecording, (error) => {
        logger.error('Error getting display media', {
          error: String(error),
        });
      });
  }, []);

  // Format time as mm:ss
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main role="main" className={styles.container}>
      <h1 className={styles.header}>Screen Recorder</h1>

      <div className={styles.card}>
        {isSupported === false ? (
          <div className={styles.unsupportedMessage}>
            <div className={styles.unsupportedIcon}>⚠️</div>
            <h2 className={styles.unsupportedTitle}>Browser Not Supported</h2>
            <p className={styles.unsupportedText}>
              Your browser doesn't support the screen recording API. Please try
              using a modern browser like Chrome, Edge, or Firefox.
            </p>
          </div>
        ) : (
          <>
            {recording && (
              <div className={styles.statusIndicator}>
                <div className={styles.recordingDot}></div>
                Recording in progress - {formatTime(recordingTime)}
              </div>
            )}

            {recording ? (
              <button
                className={`${styles.button} ${styles.recordingButton}`}
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
                  : 'Start Recording'}
              </button>
            )}

            {!recording && !downloadUrl && (
              <div className={styles.instructions}>
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
              </div>
            )}

            {downloadUrl && (
              <>
                <div className={styles.videoContainer}>
                  <video className={styles.video} src={downloadUrl} controls />
                </div>
                <a
                  className={styles.downloadLink}
                  href={downloadUrl}
                  download={downloadTitle}
                  aria-label="Download recording"
                >
                  Download Recording
                </a>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
};
