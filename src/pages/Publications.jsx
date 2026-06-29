import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import PublicationItem from "../components/PublicationItem";
import { publications, preprints, submissions } from "../data/publications";

const Publications = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="cat publications.txt" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Publications</h1>
          <p className="subtitle">
            The following list is ordered increasingly by year of publications.
          </p>
        </div>

        <div className="document-content text-left">
          <div className="pub-list">
            {publications.map((pub, index) => (
              <PublicationItem key={pub.id} pub={pub} index={index + 1} />
            ))}
          </div>
        </div>

        <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}>Preprints</h2>
        <div className="document-content text-left">
          <div className="pub-list">
            {preprints.map((pub, index) => (
              <PublicationItem key={pub.id} pub={pub} index={index + 1} />
            ))}
          </div>
        </div>

        <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}>Submissions</h2>
        <div className="document-content text-left">
          <div className="pub-list">
            {submissions.map((pub) => (
              <PublicationItem key={pub.id} pub={pub} />
            ))}
          </div>
        </div>
      </TerminalWindow>
      <TerminalWindow title="./wiles_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>My mind is now at rest.</i>
          </p>
          <span className="quote-author">
            — Andrew Wiles on Solving Fermat (
            <a
              href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905?showAssistant=true&showCode=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-primary)",
                textDecoration: "underline",
              }}
            >
              interview transcript
            </a>
            )
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default Publications;
