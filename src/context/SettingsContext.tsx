import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@louise/api_host';
const DEFAULT_HOST = '192.168.1.1';

interface SettingsContextValue {
  host: string;
  setHost: (host: string) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextValue>({
  host: DEFAULT_HOST,
  setHost: async () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [host, setHostState] = useState(DEFAULT_HOST);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY).then((stored) => {
      if (stored) setHostState(stored);
    });
  }, []);

  const setHost = async (value: string) => {
    const trimmed = value.trim();
    setHostState(trimmed);
    await AsyncStorage.setItem(STORAGE_KEY, trimmed);
  };

  return (
    <SettingsContext.Provider value={{ host, setHost }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
