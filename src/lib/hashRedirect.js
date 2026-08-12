export function redirectLegacyHashRoute() {
  const { hash } = window.location;
  if (!hash.startsWith("#/")) return;

  const path = hash.slice(1);
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  window.history.replaceState(null, "", `${base}${path}`);
}
