import { useState, useEffect } from 'react';

interface VersionInfo {
  version: string;
  downloadUrl: string;
  telegamUrl?: string;
}

let cachedVersionInfo: VersionInfo | null = null;
let isLoading = false;
let subscribers: ((data: VersionInfo | null) => void)[] = [];

export function useVersionInfo() {
  const [versionInfo, setVersionInfo] = useState<VersionInfo | null>(cachedVersionInfo);

  useEffect(() => {
    if (cachedVersionInfo) {
      setVersionInfo(cachedVersionInfo);
      return;
    }

    if (isLoading) {
      subscribers.push(setVersionInfo);
      return;
    }

    isLoading = true;
    const script = document.createElement('script');
    script.src = 'https://files.ndomen.ru/secretary/secretary_version.js';
    script.onload = () => {
      const data = (window as any).secretaryVersionInfo;
      cachedVersionInfo = data;
      setVersionInfo(data);
      subscribers.forEach(callback => callback(data));
      subscribers = [];
      document.head.removeChild(script);
      isLoading = false;
    };
    script.onerror = () => {
      console.error('Error loading version info');
      subscribers.forEach(callback => callback(null));
      subscribers = [];
      document.head.removeChild(script);
      isLoading = false;
    };
    document.head.appendChild(script);
  }, []);

  return versionInfo;
}