import { SITE_NAME, absoluteUrl } from "./site";

function setAttr(selector, name, value) {
  const node = document.querySelector(selector);
  if (!node) return;
  node.setAttribute(name, value);
}

export function applyPageMeta({ title, description, pathname }) {
  document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  if (description) {
    setAttr('meta[name="description"]', "content", description);
    setAttr('meta[property="og:description"]', "content", description);
  }
  const url = absoluteUrl(pathname);
  setAttr('link[rel="canonical"]', "href", url);
  setAttr('meta[property="og:url"]', "href", url);
  setAttr('meta[property="og:title"]', "content", document.title);
}
