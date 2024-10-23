/**
 * 是否是ssr环境
 * @returns
 */
export function isSSR() {
  return import.meta.env.SSR;
}
