import React from "react";

const PublicationItem = ({ pub }) => {
  const linkLabel =
    pub.linkText || (pub.link?.includes("doi.org") ? "DOI" : "Link");

  return (
    <article className="pub-item">
      <div>
        <h3 className="pub-title">{pub.title}</h3>
        <p className="pub-authors">
          {pub.authors.split("A. Linzi").map((part, i, arr) => (
            <React.Fragment key={i}>
              {part}
              {i < arr.length - 1 && <strong>A. Linzi</strong>}
            </React.Fragment>
          ))}
        </p>
        <p className="pub-journal">
          {pub.venue}
          {pub.year ? `, ${pub.year}` : ""}
          {pub.kind === "preface" ? " · preface" : ""}
        </p>
      </div>
      {pub.link ? (
        <div className="flex flex-col gap-1">
          <a
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
            className="pub-link"
          >
            {linkLabel}
          </a>
          {pub.extraLink ? (
            <a
              href={pub.extraLink}
              target="_blank"
              rel="noopener noreferrer"
              className="pub-link"
            >
              {pub.extraLinkText || "Link"}
            </a>
          ) : null}
        </div>
      ) : (
        <span className="pub-journal">In review</span>
      )}
    </article>
  );
};

export default PublicationItem;
