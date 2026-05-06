export const API_HOST = '192.168.1.1';

export const getHologramUrl = (project: string, language: string) =>
  `http://${API_HOST}:8000/set_project?project=${project}&language=${language}`;
