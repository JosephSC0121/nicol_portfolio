import { l as decodeKey } from './chunks/astro/server_BAAoksWn.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D6LJfsHt.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/joseph/workspace/nico/sorollaportfolio/","cacheDir":"file:///home/joseph/workspace/nico/sorollaportfolio/node_modules/.astro/","outDir":"file:///home/joseph/workspace/nico/sorollaportfolio/dist/","srcDir":"file:///home/joseph/workspace/nico/sorollaportfolio/src/","publicDir":"file:///home/joseph/workspace/nico/sorollaportfolio/public/","buildClientDir":"file:///home/joseph/workspace/nico/sorollaportfolio/dist/client/","buildServerDir":"file:///home/joseph/workspace/nico/sorollaportfolio/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@5.5.5_@netlify+blobs@8.1.2_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4_etnhjkyxwq54eljtlnzithdsby/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BtIBPmRP.css"},{"type":"inline","content":"@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BtIBPmRP.css"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BtIBPmRP.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/joseph/workspace/nico/sorollaportfolio/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/joseph/workspace/nico/sorollaportfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/joseph/workspace/nico/sorollaportfolio/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["/home/joseph/workspace/nico/sorollaportfolio/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/joseph/workspace/nico/sorollaportfolio/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/joseph/workspace/nico/sorollaportfolio/src/components/WhatIDo.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/joseph/workspace/nico/sorollaportfolio/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/.pnpm/astro@5.5.5_@netlify+blobs@8.1.2_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4_etnhjkyxwq54eljtlnzithdsby/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","/home/joseph/workspace/nico/sorollaportfolio/node_modules/.pnpm/astro@5.5.5_@netlify+blobs@8.1.2_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4_etnhjkyxwq54eljtlnzithdsby/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C-XFSurC.mjs","/home/joseph/workspace/nico/sorollaportfolio/src/assets/4.webp":"chunks/4_D0bcx3Dd.mjs","/home/joseph/workspace/nico/sorollaportfolio/src/assets/adriana.jpg":"chunks/adriana_DUMnQOHd.mjs","/home/joseph/workspace/nico/sorollaportfolio/src/assets/dogs.webp":"chunks/dogs_DymlKNUT.mjs","/home/joseph/workspace/nico/sorollaportfolio/src/assets/euro.png":"chunks/euro_BeDUDv_8.mjs","/home/joseph/workspace/nico/sorollaportfolio/src/assets/fran.jpg":"chunks/fran_BtAESewD.mjs","/home/joseph/workspace/nico/sorollaportfolio/src/assets/hero.png":"chunks/hero_CaHHCfIz.mjs","/home/joseph/workspace/nico/sorollaportfolio/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/home/joseph/workspace/nico/sorollaportfolio/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Dp7eh8FY.mjs","\u0000@astrojs-manifest":"manifest_D-dJIKgJ.mjs","/home/joseph/workspace/nico/sorollaportfolio/node_modules/.pnpm/astro@5.5.5_@netlify+blobs@8.1.2_@types+node@22.13.13_jiti@2.4.2_lightningcss@1.29.2_rollup@4_etnhjkyxwq54eljtlnzithdsby/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/hero.DH8k6ReV.png","/_astro/fran.C8W9DBRM.jpg","/_astro/4.-j0f9bJ5.webp","/_astro/adriana.B6bvdBrU.jpg","/_astro/euro.COiNf8yY.png","/_astro/dogs.DqMaZktt.webp","/_astro/about.BtIBPmRP.css","/favicon.svg","/screenshot.png","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CMTcOisY.js","/favicon/about.txt","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/fonts/Alexandria-Black.woff","/fonts/Alexandria-Black.woff2","/fonts/Alexandria-Bold.woff","/fonts/Alexandria-Bold.woff2","/fonts/Alexandria-ExtraBold.woff","/fonts/Alexandria-ExtraBold.woff2","/fonts/Alexandria-ExtraLight.woff","/fonts/Alexandria-ExtraLight.woff2","/fonts/Alexandria-Light.woff","/fonts/Alexandria-Light.woff2","/fonts/Alexandria-Medium.woff","/fonts/Alexandria-Medium.woff2","/fonts/Alexandria-Regular.woff","/fonts/Alexandria-Regular.woff2","/fonts/Alexandria-SemiBold.woff","/fonts/Alexandria-SemiBold.woff2","/fonts/Alexandria-Thin.woff","/fonts/Alexandria-Thin.woff2","/fonts/Kablammo-Regular.woff","/fonts/Kablammo-Regular.woff2"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"bGpiUy+/6hUrLstXACC+v7w2fJaxfruD/6EkBFVx3g8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
