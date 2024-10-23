import type { SSRContext } from "vue/server-renderer";

export interface ISSRContext extends SSRContext {
  title?: string;
}
