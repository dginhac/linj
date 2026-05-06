export const DEFAULT_HOST = '192.168.1.1';
export const DEFAULT_PORT = '8000';
export const DEFAULT_ENDPOINT = 'set_project';

export const getHologramUrl = (host: string, port: string, endpoint: string, project: string, language: string) =>
  `http://${host}:${port}/${endpoint}?project=${project}&language=${language}`;
