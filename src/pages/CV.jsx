import React from "react";
import { FileText, Download, Bot, ExternalLink } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";

// Import asset
import cvUrl from "../assets/cv-alessandro-linzi.pdf";

const CV = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="cat cv.md" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Curriculum Vitae</h1>
          <p className="subtitle" style={{ margin: "0 auto 3rem auto" }}>
            My Academic Background and Experience
          </p>
        </div>

        <div className="document-content text-left">
          <div className="document-section">
            <h3 style={{ marginBottom: "1.5rem" }}>Curriculum Vitae Options</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "2rem" }}>
              Explore my background, experience, and publications through an
              interactive AI-powered conversational interface, or download the
              standard PDF document.
            </p>

            <div className="grid-2">
              <div
                className="resource-card"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="resource-info"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(34, 211, 238, 0.15)",
                      padding: "0.75rem",
                      borderRadius: "12px",
                    }}
                  >
                    <Bot size={24} color="#22d3ee" />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: "0 0 0.5rem 0",
                        fontSize: "1.1rem",
                        color: "#fff",
                      }}
                    >
                      Interactive AI CV
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        color: "#9ca3af",
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                      }}
                    >
                      Ask questions about my research, academic journey, or
                      teaching experience in a conversational interface.
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <a
                    href="https://ai.studio/apps/5b6fbc32-605a-4d3d-a8ae-2cae49da706c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "center",
                      width: "100%",
                      padding: "0.75rem",
                    }}
                  >
                    Launch App <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div
                className="resource-card"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  className="resource-info"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      background: "rgba(167, 139, 250, 0.15)",
                      padding: "0.75rem",
                      borderRadius: "12px",
                    }}
                  >
                    <FileText size={24} color="#a78bfa" />
                  </div>
                  <div>
                    <h4
                      style={{
                        margin: "0 0 0.5rem 0",
                        fontSize: "1.1rem",
                        color: "#fff",
                      }}
                    >
                      Standard CV Document
                    </h4>
                    <p
                      style={{
                        margin: 0,
                        color: "#9ca3af",
                        fontSize: "0.9rem",
                        lineHeight: "1.5",
                      }}
                    >
                      Download my comprehensive detailed Curriculum Vitae
                      containing education, positions, and publications.
                    </p>
                  </div>
                </div>
                <div style={{ marginTop: "auto" }}>
                  <a
                    href={cvUrl}
                    download="cv-alessandro-linzi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      justifyContent: "center",
                      width: "100%",
                      padding: "0.75rem",
                    }}
                  >
                    <Download size={18} /> Download PDF
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "3rem",
                background: "rgba(0,0,0,0.2)",
                padding: "1.5rem",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.05)",
              }}
            >
              <h4
                style={{
                  color: "#fff",
                  marginBottom: "1.25rem",
                  fontSize: "1.05rem",
                }}
              >
                What's inside the standard CV?
              </h4>
              <ul
                style={{
                  listStyleType: "none",
                  paddingLeft: 0,
                  color: "#cbd5e1",
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "1rem",
                  margin: 0,
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#38bdf8", fontSize: "1.2rem" }}>
                    ▹
                  </span>{" "}
                  Academic Education
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#38bdf8", fontSize: "1.2rem" }}>
                    ▹
                  </span>{" "}
                  Research Experience
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#38bdf8", fontSize: "1.2rem" }}>
                    ▹
                  </span>{" "}
                  Publications & Preprints
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#38bdf8", fontSize: "1.2rem" }}>
                    ▹
                  </span>{" "}
                  Conferences & Talks
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span style={{ color: "#38bdf8", fontSize: "1.2rem" }}>
                    ▹
                  </span>{" "}
                  Teaching Experience
                </li>
              </ul>
            </div>
          </div>
        </div>
      </TerminalWindow>

      <TerminalWindow title="./godel_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>
              [...] One can (assuming the consistency of classical mathematics)
              even give examples of propositions [...] which are really
              contentually true but are unprovable in the formal system of
              classical mathematics. Therefore if one adjoins the negation of
              such a proposition to the axioms of classical mathematics, one
              obtains a consistent system in which a contentually false
              proposition is provable.
            </i>
          </p>
          <span className="quote-author">
            — Kurt Gödel. Könisberg, September 7, 1930. Discussion on the
            Foundation of Mathematics, Translated and edited by J. W. Dawson
            Jr., History and Philosophy of Logic, 5:1. 1984.
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default CV;
