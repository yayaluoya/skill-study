import { useSSRContext } from "vue";
import { isSSR } from "./env";
import type { ISSRContext } from "@/_d/ctx";

/**
 * 设置html的head
 * @param title
 */
export function setHtmlHead(title: string) {
  if (isSSR()) {
    let ssrContext: ISSRContext = useSSRContext()!;
    ssrContext.title = title;
  }
}
