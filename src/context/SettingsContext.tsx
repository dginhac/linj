import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HOST_KEY = '@louise/api_host';
const PORT_KEY = '@louise/api_port';
const ENDPOINT_KEY = '@louise/api_endpoint';
const DEFAULT_HOST = '192.168.1.1';
const DEFAULT_PORT = '8000';
const DEFAULT_ENDPOINT = 'set_project';

interface SettingsContextValue {
  host: string;
  port: string;
  endpoint: string;
  setHost: (host: string) => Promise<void>;
  setPort: (port: string) => Promise<void>;
  setEndpoint: (endpoint: string) => Promise<void>;
}

const SettingsContext = createContext<SettingsContextValue>({
  host: DEFAULT_HOST,
  port: DEFAULT_PORT,
  endpoint: DEFAULT_ENDPOINT,
  setHost: async () => {},
  setPort: async () => {},
  setEndpoint: async () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [host, setHostState] = useState(DEFAULT_HOST);
  const [port, setPortState] = useState(DEFAULT_PORT);
  const [endpoint, setEndpointState] = useState(DEFAULT_ENDPOINT);

  useEffect(() => {
    AsyncStorage.multiGet([HOST_KEY, PORT_KEY, ENDPOINT_KEY]).then((pairs) => {
      const stored = Object.fromEntries(pairs.map(([k, v]) => [k, v]));
      if (stored[HOST_KEY]) setHostState(stored[HOST_KEY]!);
      if (stored[PORT_KEY]) setPortState(stored[PORT_KEY]!);
      if (stored[ENDPOINT_KEY]) setEndpointState(stored[ENDPOINT_KEY]!);
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

  const setEndpoint = async (value: string) => {
    const trimmed = value.trim();
    setEndpointState(trimmed);
    await AsyncStorage.setItem(ENDPOINT_KEY, trimmed);
  };

  return (
    <SettingsContext.Provider value={{ host, port, endpoint, setHost, setPort, setEndpoint }}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettings = () => useContext(SettingsContext);
