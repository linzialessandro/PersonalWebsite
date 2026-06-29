import React from "react";
import TerminalWindow from "../components/TerminalWindow";
import { dialogues, poetry } from "../data/aiGallery";

const AIGallery = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="ls -la /ai-gallery" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>AI Gallery</h1>
        </div>

        <div className="document-content text-left">
          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Impossible Dialogues</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              These are <i>Impossible Dialogues</i>. I created them with
              ChatGPT. They are interviews with important mathematicians of the
              past. Wait, what about Turing? Computer scientist? Logician?
              Philosopher? What about Leibniz? These "titles" are a very modern
              and not quite satisfying idea. Anyhow, I thought these dialogues
              are somehow nice to read:
            </p>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              {dialogues.map((dialogue, index) => (
                <li key={index}>
                  Interview with{" "}
                  <a
                    href={dialogue.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#60a5fa" }}
                  >
                    {dialogue.name}
                  </a>{" "}
                  {dialogue.lang && `(in ${dialogue.lang})`}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>AI Poetry</h3>
            {poetry.map((poem, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < poetry.length - 1 ? "1.5rem" : 0,
                }}
              >
                <h4 style={{ color: "#fff", marginBottom: "0.5rem" }}>
                  {poem.title}
                </h4>
                <div
                  style={{
                    color: "#9ca3af",
                    fontStyle: "italic",
                    paddingLeft: "1rem",
                    borderLeft: "2px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {poem.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Algorithmic Art</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              Visualizing the profound complexity of mathematics through
              generative algorithms.
            </p>
            <div
              style={{
                textAlign: "center",
                background: "rgba(0, 0, 0, 0.2)",
                padding: "2rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <img
                src="/ai-art.jpg"
                alt="AI Generated Mathematical Art"
                style={{
                  maxWidth: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
                }}
              />
              <p
                style={{
                  color: "#9ca3af",
                  marginTop: "1rem",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                }}
              >
                "The Mandelbrot Dream" — Generated with AI
              </p>
            </div>
          </div>
        </div>
      </TerminalWindow>
      <TerminalWindow title="./lovelace_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>
              The Analytical Engine has no pretensions whatever to originate
              anything. It can do whatever we know how to order it to perform.
            </i>
          </p>
          <span className="quote-author">
            — Ada Lovelace. Notes on L.F. Menabrea's "Sketch of the Analytical
            Engine". 1843.
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default AIGallery;
