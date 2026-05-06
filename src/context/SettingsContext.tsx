import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HOST_KEY = '@louise/api_host';
const PORT_KEY = '@louise/api_port';
const DEFAULT_HOST = '192.168.1.1';
const DEFAULT_PORT = '8000';

interface SettingsContextValue {
  host: string;
  port: string;
  setHost: (host: string) => Promise<void>;
  setPort: (port: string) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextValue>({
  host: DEFAULT_HOST,
  port: DEFAULT_PORT,
  setHost: async () => {},
  setPort: async () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [host, setHostState] = useState(DEFAULT_HOST);
  const [port, setPortState] = useState(DEFAULT_PORT);

  useEffect(() => {
    AsyncStorage.multiGet([HOST_KEY, PORT_KEY]).then((pairs) => {
      const stored = Object.fromEntries(pairs.map(([k, v]) => [k, v]));
      if (stored[HOST_KEY]) setHostState(stored[HOST_KEY]!);
      if (stored[PORT_KEY]) setPortState(stored[PORT_KEY]!);
    });
  }, []);

  const setHost = async (value: string) => {
    const trimmed = value.trim();
    setHostState(trimmed);
    await AsyncStorage.setItem(HOST_KEY, trimmed);
  };

  const setPort = async (value: string) => {
    const trimmed = value.trim();
    setPortState(trimmed);
    await AsyncStorage.setItem(PORT_KEY, trimmed);
  };

  return (
    <SettingsContext.Provider value={{ host, port, setHost, setPort }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
