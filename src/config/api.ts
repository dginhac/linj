export const DEFAULT_HOST = '192.168.1.1';

export const getHologramUrl = (host: string, project: string, language: string) =>
  `http://${host}:8000/set_project?project=${project}&language=${language}`;
