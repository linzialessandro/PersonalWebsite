import { FileText, Bot } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import QuotePanel from "../components/QuotePanel";
import ResourceCard from "../components/ResourceCard";
import { cvData } from "../data/cv";

const CV = () => {
  return (
    <PageShell>
      <PageMeta
        title="Curriculum Vitae"
        description="Academic background, experience, and CV download for Alessandro Linzi."
      />
      <TerminalWindow title="cat cv.md" delay={0}>
        <div className="page-header">
          <h1>Curriculum Vitae</h1>
          <p className="subtitle">My Academic Background and Experience</p>
        </div>

        <div className="document-content">
          <section className="document-section">
            <h3 className="mb-6">Curriculum Vitae Options</h3>
            <p className="text-slate-200 mb-8">
              Explore my background, experience, and publications through an
              interactive AI-powered conversational interface, or download the
              standard PDF document.
            </p>

            <div className="grid-2">
              <ResourceCard
                stacked
                title="Interactive AI CV"
                description="Ask questions about my research, academic journey, or teaching experience in a conversational interface."
                icon={Bot}
                tone="cyan"
                link={cvData.aiCvLink}
                linkText="Launch App"
              />
              <ResourceCard
                stacked
                title="Standard CV Document"
                description="Download my comprehensive detailed Curriculum Vitae containing education, positions, and publications."
                icon={FileText}
                tone="violet"
                link={cvData.pdfUrl}
                linkText="Download PDF"
                isDownload
                downloadName="cv-alessandro-linzi.pdf"
              />
            </div>

            <div className="mt-12 bg-black/20 p-6 rounded-xl border border-white/5">
              <h4 className="text-on-primary mb-5 mt-0 text-[1.05rem]">
                What&apos;s inside the standard CV?
              </h4>
              <ul className="plain-list grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 m-0 text-slate-300">
                {cvData.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="text-sky-400 text-xl">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </TerminalWindow>

      <QuotePanel
        title="./godel_quote.sh"
        author="Kurt Gödel. Königsberg, September 7, 1930. Discussion on the Foundation of Mathematics, Translated and edited by J. W. Dawson Jr., History and Philosophy of Logic, 5:1. 1984."
      >
        [...] One can (assuming the consistency of classical mathematics) even
        give examples of propositions [...] which are really contentually true
        but are unprovable in the formal system of classical mathematics.
        Therefore if one adjoins the negation of such a proposition to the
        axioms of classical mathematics, one obtains a consistent system in
        which a contentually false proposition is provable.
      </QuotePanel>
    </PageShell>
  );
};

export default CV;
