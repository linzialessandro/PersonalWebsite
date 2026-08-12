import React from "react";

const PublicationItem = ({ pub, index }) => {
  return (
    <article className="glass-card pub-item">
      <h3 className="pub-title">
        {index ? `${index}. ` : ""}
        {pub.title}
      </h3>
      <p className="pub-authors">
        {pub.authors.split("A. Linzi").map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && <strong>A. Linzi</strong>}
          </React.Fragment>
        ))}
      </p>
      <p className="pub-journal">{pub.journal}</p>
      {pub.link && (
        <a
          href={pub.link}
          target="_blank"
          rel="noopener noreferrer"
          className="pub-link"
        >
          {pub.linkText || "View Publication"} ↗
        </a>
      )}
    </article>
  );
};

export default PublicationItem;
