function isPreface(item) {
  return item.kind === "preface";
}

function prefaceLast(a, b) {
  if (isPreface(a) === isPreface(b)) return 0;
  return isPreface(a) ? 1 : -1;
}

function addToYear(groups, item) {
  const year = item.year ?? "Other";
  if (!groups.has(year)) groups.set(year, []);
  groups.get(year).push(item);
}

function byYearDescending(a, b) {
  return Number(b[0]) - Number(a[0]);
}

export function groupByYear(items) {
  const groups = new Map();
  for (const item of items) addToYear(groups, item);
  for (const group of groups.values()) group.sort(prefaceLast);
  return [...groups.entries()].sort(byYearDescending);
}
