import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import { colleagues, otherLinks } from "../data/academicNet";

const AcademicNet = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="cat academic-net.md" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Academic Net</h1>
        </div>

        <div className="document-content text-left">
          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Colleagues</h3>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              {colleagues.map((colleague, index) => (
                <li key={index}>
                  {colleague.url ? (
                    <a
                      href={colleague.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#60a5fa" }}
                    >
                      {colleague.name}
                    </a>
                  ) : (
                    colleague.name
                  )}
                  {colleague.links && colleague.links.length > 0 && " ("}
                  {colleague.links &&
                    colleague.links.map((link, i) => (
                      <React.Fragment key={i}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "#60a5fa" }}
                        >
                          {link.text}
                        </a>
                        {i < colleague.links.length - 1 && ", "}
                      </React.Fragment>
                    ))}
                  {colleague.links && colleague.links.length > 0 && ")"}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Other links</h3>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              {otherLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#60a5fa" }}
                  >
                    {link.text}
                  </a>
                  {link.suffix && link.suffix}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </TerminalWindow>
      <TerminalWindow title="./mandelbrot_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>
              I claim that many patterns of Nature are so irregular and
              fragmented, that, compared with Euclid—a term used in this work to
              denote all of standard geometry—Nature exhibits not simply a
              higher degree but an altogether different level of complexity.
            </i>
          </p>
          <span className="quote-author">
            — Benoit Mandelbrot. The Fractal Geometry of Nature . 1977.
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default AcademicNet;
