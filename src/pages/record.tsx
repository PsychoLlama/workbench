import React from 'react';
import * as styles from './_record.css';
import { HeadFC } from 'gatsby';
import logger from '@holz/logger';

const ScreenRecording = () => {
  const [recording, setRecording] = React.useState(false);
  const [downloadUrl, setDownloadUrl] = React.useState<null | string>(null);
  const [downloadTitle, setDownloadTitle] = React.useState('recording.mp4');
  const [recorder, setRecorder] = React.useState<null | MediaRecorder>(null);
  const [recordingTime, setRecordingTime] = React.useState(0);
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
        >
          Stop Recording
        </button>
      ) : (
        <button className={styles.button} onClick={recordScreen}>
          Start Recording
        </button>
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
          >
            Download Recording
          </a>
        </>
      )}
    </main>
  );
};

export const Head: HeadFC = () => <title>Screen Recorder | Workbench</title>;

export default ScreenRecording;
