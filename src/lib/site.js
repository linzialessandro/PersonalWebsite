export const SITE_NAME = "Alessandro Linzi, PhD";
export const SITE_URL = "https://linzialessandro.github.io/PersonalWebsite";

export function getBasename() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base || undefined;
}

export function absoluteUrl(pathname = "/") {
  return `${SITE_URL}${pathname}`;
}
