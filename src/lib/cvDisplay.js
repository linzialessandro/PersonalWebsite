export function timelineRole(item) {
  if (!item.place) return item.role;
  return `${item.role}, ${item.place}`;
}

export function serviceLink(item) {
  if (!item.href || !item.detail) return null;
  return { href: item.href, detail: item.detail };
}
