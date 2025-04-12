import React from 'react';
import logger from '@holz/logger';

// Custom hook to detect browser support for screen recording
export const useScreenRecordingSupport = (): boolean | null => {
  const [isSupported, setIsSupported] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    const hasNavigator = typeof navigator !== 'undefined';
    const hasMediaDevices = hasNavigator && 'mediaDevices' in navigator;
    const hasDisplayMedia =
      hasMediaDevices && 'getDisplayMedia' in navigator.mediaDevices;
    const hasMediaRecorder = typeof MediaRecorder !== 'undefined';

    const supported = hasMediaDevices && hasDisplayMedia && hasMediaRecorder;

    if (!supported) {
      logger.warn('Screen recording not supported in this browser', {
        hasNavigator,
        hasMediaDevices,
        hasDisplayMedia,
        hasMediaRecorder,
      });
    }

    setIsSupported(supported);
  }, []);

  return isSupported;
};

// Custom hook for screen recording functionality
export const useScreenRecorder = () => {
  const [state, setState] = React.useState<RecordingState>({
    recording: false,
    downloadUrl: null,
    downloadTitle: 'recording.mp4',
    recordingTime: 0,
  });

  const [recorder, setRecorder] = React.useState<MediaRecorder | null>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Clean up on unmount
  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      if (state.downloadUrl) {
        URL.revokeObjectURL(state.downloadUrl);
      }
    };
  }, [state.downloadUrl]);

  const startRecording = React.useCallback((stream: MediaStream) => {
    logger.info('Recording started', {
      id: stream.id,
      active: stream.active,
    });

    const mediaRecorder = new MediaRecorder(stream);
    setRecorder(mediaRecorder);
    setState((prev) => ({
      ...prev,
      recording: true,
      recordingTime: 0,
    }));

    // Start timer
    timerRef.current = setInterval(() => {
      setState((prev) => ({
        ...prev,
        recordingTime: prev.recordingTime + 1,
      }));
    }, 1000);

    const chunks: Blob[] = [];

    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    mediaRecorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/mp4' });
      const url = URL.createObjectURL(blob);
      stream.getTracks().forEach((track) => track.stop());

      setState((prev) => ({
        ...prev,
        recording: false,
        downloadUrl: url,
        downloadTitle: `screen-recording-${Date.now()}.mp4`,
      }));

      logger.info('Recording finished', {
        id: stream.id,
        active: stream.active,
        url,
      });
    };

    mediaRecorder.onerror = (event: Event) => {
      const { error } = event as MediaRecorderErrorEvent;
      logger.error('Recording failed', {
        message: error.message,
        name: error.name,
      });
    };

    mediaRecorder.start();
  }, []);

  const stopRecording = React.useCallback(() => {
    setState((prev) => ({ ...prev, recording: false }));
    logger.info('Stopping recorder');

    recorder?.stop();

    // Clear timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [recorder]);

  const recordScreen = React.useCallback(() => {
    // Clear previous recording when starting a new one
    setState((prev) => ({
      ...prev,
      downloadUrl: null,
      downloadTitle: 'recording.mp4',
    }));

    navigator.mediaDevices
      .getDisplayMedia({ video: true })
      .then(startRecording, (error: DOMException) => {
        logger.error('Error getting display media', {
          error,
        });
      });
  }, [startRecording]);

  // Format time using Intl API
  const formatTime = (seconds: number): string => {
    // Create a Date object with the elapsed seconds
    const date = new Date(0);
    date.setSeconds(seconds);

    // Use Intl.DateTimeFormat to format the time
    const options: Intl.DateTimeFormatOptions = {
      minute: 'numeric',
      second: '2-digit',
      timeZone: 'UTC', // Use UTC to avoid timezone issues
    };

    // If recording is over an hour, include hours in the format
    if (seconds >= 3600) {
      options.hour = 'numeric';
    }

    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  return {
    ...state,
    formatTime,
    recordScreen,
    stopRecording,
  };
};

export interface RecordingState {
  recording: boolean;
  downloadUrl: string | null;
  downloadTitle: string;
  recordingTime: number;
}

interface MediaRecorderErrorEvent extends Event {
  error: DOMException;
}
