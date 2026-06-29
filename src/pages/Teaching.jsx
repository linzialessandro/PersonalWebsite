import React from "react";
import { ExternalLink, Download } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";
import { teachingSections } from "../data/teaching";

const Teaching = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="./teaching_resources.sh" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Teaching</h1>
        </div>

        <div className="document-content text-left">
          {teachingSections.map((section) => (
            <div
              key={section.id}
              className="glass-card document-section"
              style={{ marginBottom: "2rem" }}
            >
              <h3>{section.title}</h3>

              {section.type === "list" && (
                <ul
                  style={{
                    paddingLeft: "1.5rem",
                    marginBottom: "1rem",
                    color: "#f3f4f6",
                  }}
                >
                  {section.items.map((item, i) => (
                    <li key={i}>
                      {item.content.split(item.italicText)[0]}
                      <i>{item.italicText}</i>
                      {item.content.split(item.italicText)[1]}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#60a5fa",
                          textDecoration: "underline",
                        }}
                      >
                        {item.linkText}
                      </a>
                    </li>
                  ))}
                </ul>
              )}

              {section.type === "text" && (
                <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
                  {section.linkPrefix && (
                    <a
                      href={section.linkPrefix.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#60a5fa", textDecoration: "underline" }}
                    >
                      {section.linkPrefix.text}
                    </a>
                  )}
                  {section.content}
                  {section.linkSuffix && (
                    <a
                      href={section.linkSuffix.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#60a5fa", textDecoration: "underline" }}
                    >
                      {section.linkSuffix.text}
                    </a>
                  )}
                  {section.afterLink}
                </p>
              )}

              {section.type === "download" && (
                <>
                  <p style={{ color: "#f3f4f6", marginBottom: "1.5rem" }}>
                    {section.content}
                  </p>
                  <a
                    href={section.downloadUrl}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      width: "fit-content",
                    }}
                  >
                    <Download size={18} /> {section.downloadLabel}
                  </a>
                </>
              )}

              {section.type === "links-list" && (
                <>
                  {section.description && (
                    <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
                      {section.description}
                    </p>
                  )}
                  <ul
                    style={{
                      paddingLeft: "1.5rem",
                      color: "#f3f4f6",
                      lineHeight: "2",
                    }}
                  >
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#60a5fa" }}
                        >
                          {item.linkText}
                        </a>
                        {item.middle && item.middle}
                        {item.url2 && (
                          <a
                            href={item.url2}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#60a5fa" }}
                          >
                            {item.linkText2}
                          </a>
                        )}
                        {item.suffix}
                      </li>
                    ))}
                  </ul>
                  {section.subsections &&
                    section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h4
                          style={{
                            marginTop: "1.5rem",
                            marginBottom: "0.5rem",
                            color: "#fff",
                          }}
                        >
                          {sub.title}
                        </h4>
                        {sub.description && (
                          <p
                            style={{ color: "#9ca3af", marginBottom: "0.5rem" }}
                          >
                            {sub.description}
                          </p>
                        )}
                        <ul
                          style={{
                            paddingLeft: "1.5rem",
                            color: "#f3f4f6",
                            lineHeight: "2",
                          }}
                        >
                          {sub.items.map((item, j) => (
                            <li key={j}>
                              <a
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: "#60a5fa" }}
                              >
                                {item.linkText}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                </>
              )}

              {section.type === "app" && (
                <>
                  <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
                    {section.content}
                  </p>
                  <p style={{ color: "#f3f4f6", marginBottom: "1.5rem" }}>
                    {section.subContent}
                  </p>
                  <div
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                  >
                    {section.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={
                          i === 0 ? "btn btn-primary" : "btn btn-outline"
                        }
                        style={{
                          display: "flex",
                          gap: "0.5rem",
                          width: "fit-content",
                        }}
                      >
                        <ExternalLink size={18} /> {link.label}
                      </a>
                    ))}
                  </div>
                </>
              )}

              {section.type === "quote" && (
                <>
                  <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
                    {section.content}
                  </p>
                  <p
                    style={{
                      color: "#9ca3af",
                      fontStyle: "italic",
                      paddingLeft: "1rem",
                      borderLeft: "3px solid #60a5fa",
                    }}
                  >
                    {section.quote}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </TerminalWindow>
      <TerminalWindow title="./euler_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>
              [...] All such expressions as √-1, √-2, √-3, √-4 &amp;c. are
              consequently impossible, or imaginary numbers, since they
              represent roots of negative quantities; and of such numbers we may
              truly assert that they are neither nothing, nor greater than
              nothing, nor less than nothing; which necessarily constitutes them
              imaginary, or impossible. [...]
            </i>
          </p>
          <span className="quote-author">
            — Leonhard Euler. Elements of Algebra (Translation from French).
            Chapter XIII, page 43, paragraph 144.
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default Teaching;
