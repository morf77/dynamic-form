import { globalConfig } from '../constants/config';

export const generateAbsoluteURL = (path: string, baseURL?: string) => {
  return new URL(path, baseURL || globalConfig.frontURL).toString();
};

export const pathnameCreator = (pathname: string, queryParams: Record<string, string>) => {
  const queryString = new URLSearchParams(queryParams).toString();

  return queryString.length ? `${pathname}?${queryString}` : pathname;
};
