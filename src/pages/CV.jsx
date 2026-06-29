import React from "react";
import { FileText, Download } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";
import ResourceCard from "../components/ResourceCard";
import { cvData } from "../data/cv";

const CV = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="cat cv.md" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Curriculum Vitae</h1>
          <p
            className="subtitle"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            View my professional experience, education, and academic background.
          </p>
        </div>

        <div
          className="document-content text-left"
          style={{ marginTop: "2rem" }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              marginTop: "2rem",
            }}
          >
            <ResourceCard
              title="Interactive AI CV"
              subtitle="Chat with an AI assistant about my background"
              icon={FileText}
              color="rgba(168, 85, 247, 1)"
              link={cvData.aiCvLink}
            />

            <ResourceCard
              title="Download PDF"
              subtitle="Get a traditional copy of my CV"
              icon={Download}
              color="rgba(59, 130, 246, 1)"
              link={cvData.pdfUrl}
              isDownload={true}
              bgOpacity="0.1"
              borderColor="rgba(59, 130, 246, 0.2)"
            />
          </div>
        </div>
      </TerminalWindow>
      <TerminalWindow title="./grothendieck_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>
              Discovery is the privilege of the child: the child who has no fear
              of being once again wrong, of looking like an idiot, of not being
              serious, of not doing things like everyone else.
            </i>
          </p>
          <span className="quote-author">
            — Alexander Grothendieck. Récoltes et Semailles. 1986.
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default CV;
