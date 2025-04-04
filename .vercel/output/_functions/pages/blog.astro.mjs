/* empty css                                 */
import { c as createComponent, r as renderComponent, b as renderHead, g as renderTemplate } from '../chunks/astro/server_BAAoksWn.mjs';
import { $ as $$BaseHead, a as $$Header, d as $$Footer } from '../chunks/FormattedDate_DrBQsyFt.mjs';
import { S as SITE_DESCRIPTION, a as SITE_TITLE } from '../chunks/consts_DtsrwfYD.mjs';
import { g as getCollection } from '../chunks/_astro_content_BOOIvW9K.mjs';
import { $ as $$WhatIDo } from '../chunks/WhatIDo_Bauz1Y3D.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  (await getCollection("blog")).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto md:px-10 py-20"> ${renderComponent($$result, "WhatIDo", $$WhatIDo, {})} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/home/joseph/workspace/nico/sorollaportfolio/src/pages/blog/index.astro", void 0);

const $$file = "/home/joseph/workspace/nico/sorollaportfolio/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
