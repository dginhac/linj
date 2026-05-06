export const DEFAULT_HOST = '192.168.1.1';
export const DEFAULT_PORT = '8000';

export const getHologramUrl = (host: string, port: string, project: string, language: string) =>
  `http://${host}:${port}/set_project?project=${project}&language=${language}`;
