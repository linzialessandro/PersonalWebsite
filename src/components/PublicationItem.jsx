import { Fragment, useState } from "react";
import ExternalTextLink from "./ExternalTextLink";
import {
  extraLinkLabel,
  publicationLinkLabel,
  venueLine,
} from "../lib/publicationDisplay";

const AUTHOR_MARK = "A. Linzi";

const AuthorNames = ({ authors }) => {
  const parts = authors.split(AUTHOR_MARK);
  return parts.map((part, index) => (
    <Fragment key={index}>
      {part}
      {index < parts.length - 1 ? <strong>{AUTHOR_MARK}</strong> : null}
    </Fragment>
  ));
};

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  throw new Error("Clipboard unavailable");
}

const BibTeXCopy = ({ bibtex }) => {
  const [status, setStatus] = useState("idle");

  const onCopy = async () => {
    try {
      await copyText(bibtex);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1600);
    } catch {
      setStatus("failed");
      window.setTimeout(() => setStatus("idle"), 1600);
    }
  };

  const label =
    status === "copied"
      ? "Copied"
      : status === "failed"
        ? "Copy failed"
        : "BibTeX";

  return (
    <button
      type="button"
      className="pub-link pub-bibtex"
      onClick={onCopy}
      aria-live="polite"
    >
      {label}
    </button>
  );
};

const PublicationLinks = ({ pub }) => (
  <div className="flex flex-col gap-1">
    <ExternalTextLink href={pub.link} className="pub-link">
      {publicationLinkLabel(pub)}
    </ExternalTextLink>
    {pub.extraLink ? (
      <ExternalTextLink href={pub.extraLink} className="pub-link">
        {extraLinkLabel(pub)}
      </ExternalTextLink>
    ) : null}
    {pub.bibtex ? <BibTeXCopy bibtex={pub.bibtex} /> : null}
  </div>
);

const PublicationItem = ({ pub }) => (
  <article className="pub-item">
    <div>
      <h3 className="pub-title">{pub.title}</h3>
      <p className="pub-authors">
        <AuthorNames authors={pub.authors} />
      </p>
      <p className="pub-journal">{venueLine(pub)}</p>
    </div>
    {pub.link ? (
      <PublicationLinks pub={pub} />
    ) : (
      <span className="pub-journal">In review</span>
    )}
  </article>
);

export default PublicationItem;
