declare module 'url1' {
  export interface Url1 {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export function parse1(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}
