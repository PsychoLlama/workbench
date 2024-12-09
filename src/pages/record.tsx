import React from 'react';
import * as styles from './_record.css';
import { HeadFC } from 'gatsby';

const ScreenRecording = () => {
  const [recording, setRecording] = React.useState(false);
  const [downloadUrl, setDownloadUrl] = React.useState<null | string>(null);
  const [downloadTitle, setDownloadTitle] = React.useState('recording.mp4');
  const [recorder, setRecorder] = React.useState<null | MediaRecorder>(null);

  const startRecording = React.useCallback((stream: MediaStream) => {
    const recorder = new MediaRecorder(stream);
    setRecorder(recorder);
    setRecording(true);

    const chunks: Blob[] = [];

    recorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      setRecording(false);
      setDownloadUrl(url);
      setDownloadTitle(`screen-recording-${Date.now()}.mp4`);
    };

    recorder.start();
  }, []);

  const stopRecording = React.useCallback(() => {
    setRecording(false);
    console.log('STOPPING:', recorder);
    recorder?.stop();
  }, [recorder]);

  const recordScreen = React.useCallback(() => {
    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then(startRecording, console.error);
  }, []);

  return (
    <main role="main" className={styles.container}>
      <h1 className={styles.header}>Record Screen</h1>

      {recording ? (
        <button className={styles.button} onClick={stopRecording}>
          Stop Recording
        </button>
      ) : (
        <button className={styles.button} onClick={recordScreen}>
          Start Recording
        </button>
      )}

      {downloadUrl && (
        <>
          <video src={downloadUrl} controls />
          <a href={downloadUrl} download={downloadTitle}>
            Download Recording
          </a>
        </>
      )}
    </main>
  );
};

export const Head: HeadFC = () => <title>Screen Recording</title>;

export default ScreenRecording;
