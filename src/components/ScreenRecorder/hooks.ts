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
