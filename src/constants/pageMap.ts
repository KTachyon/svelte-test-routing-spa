import type { ComponentType } from "svelte";
import Page1 from "../pages/Page1.svelte";
import Page2 from "../pages/Page2.svelte";
import Page3 from "../pages/Page3.svelte";

export const pageMap: { [key: string]: ComponentType } = {
  Page1,
  Page2,
  Page3
};
