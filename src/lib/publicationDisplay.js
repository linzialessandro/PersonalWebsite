export function publicationKey(pub) {
  return pub.id ?? pub.title;
}

export function publicationLinkLabel(pub) {
  if (pub.linkText) return pub.linkText;
  if (typeof pub.link === "string" && pub.link.includes("doi.org")) {
    return "DOI";
  }
  return "Link";
}

export function venueLine(pub) {
  const year = pub.year ? `, ${pub.year}` : "";
  const kind = pub.kind === "preface" ? ", preface" : "";
  return `${pub.venue ?? ""}${year}${kind}`;
}

export function extraLinkLabel(pub) {
  return pub.extraLinkText || "Link";
}
