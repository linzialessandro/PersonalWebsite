import { Download, ExternalLink } from "lucide-react";
import TerminalWindow from "../components/TerminalWindow";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import QuotePanel from "../components/QuotePanel";
import SectionCard from "../components/SectionCard";
import ExternalTextLink from "../components/ExternalTextLink";
import {
  teachingBook,
  firstTexUrl,
  latexGuides,
  italianLatexGuides,
  codingResources,
  visualizationResources,
  competitionResources,
  teachingApps,
} from "../data/teaching";

const ResourceLinkList = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.url}>
        <ExternalTextLink href={item.url}>{item.label}</ExternalTextLink>
        {item.extra ? (
          <>
            {" "}
            &amp;{" "}
            <ExternalTextLink href={item.extra.url}>
              {item.extra.label}
            </ExternalTextLink>
          </>
        ) : null}
        {item.suffix}
      </li>
    ))}
  </ul>
);

const Teaching = () => {
  return (
    <PageShell>
      <PageMeta
        title="Teaching"
        description="Teaching resources, LaTeX guides, and mathematical tools."
      />
      <TerminalWindow title="./teaching_resources.sh" delay={0}>
        <div className="page-header">
          <h1>Teaching</h1>
        </div>

        <div className="document-content">
          <SectionCard title={teachingBook.title}>
            <ul>
              <li>
                {teachingBook.authors} <i>{teachingBook.italicTitle}</i>{" "}
                {teachingBook.rest}{" "}
                <ExternalTextLink href={teachingBook.url}>
                  [LINK]
                </ExternalTextLink>
              </li>
            </ul>
          </SectionCard>

          <SectionCard title="GeoGebra">
            <p className="text-slate-200 m-0">
              <ExternalTextLink href={teachingApps.geogebra}>
                GeoGebra
              </ExternalTextLink>{" "}
              is a free mathematics platform that empowers students and
              educators with dynamic tools for learning and teaching. This
              comprehensive suite offers an extensive collection of interactive
              mathematical resources available directly through your web
              browser.
            </p>
          </SectionCard>

          <SectionCard title="LaTeX for Your First Paper">
            <p className="text-slate-200 mb-6">
              A concise essential guide written by me in the form of a
              presentation.
            </p>
            <a
              href={firstTexUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline w-fit"
            >
              <Download size={18} /> Download Presentation
            </a>
          </SectionCard>

          <SectionCard title="LaTeX Resources for Users and Beginners">
            <ResourceLinkList items={latexGuides} />
            <h4>Italian Resources</h4>
            <p className="text-muted-foreground mb-2">
              Three very useful texts by Lorenzo Pantieri which I still consult
              very often:
            </p>
            <ResourceLinkList items={italianLatexGuides} />
          </SectionCard>

          <SectionCard title="Mate-ematician">
            <p className="text-slate-200 mb-4">
              MacTutor is a free online resource containing biographies of more
              than 3000 mathematicians. <i>Mate-matician</i> is an app which I
              created to discover the wonderful MacTutor biographies repository
              in an interactive way. The app can be accessed through this link,
              using a Google account. The link redirects to the public preview
              on the Google AI Studio platform. Let the browser load the app,
              then set it to full screen and try it yourself!
            </p>
            <p className="text-slate-200 mb-6">
              Alternatively, you may clone the corresponding GitHub repository.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href={teachingApps.mateStudio}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-fit"
              >
                <ExternalLink size={18} /> Open App in AI Studio
              </a>
              <a
                href={teachingApps.mateGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline w-fit"
              >
                <ExternalLink size={18} /> View GitHub Repo
              </a>
            </div>
          </SectionCard>

          <SectionCard title="SenzaTesto Database">
            <p className="text-slate-200 m-0">
              <ExternalTextLink href={teachingApps.senzaTesto}>
                SenzaTesto
              </ExternalTextLink>{" "}
              is the first open-source database of mathematics exercises
              generated by Artificial Intelligence, free for all Italian
              students and professors. It provides a vast collection of
              procedural math problems to support teaching and learning.
            </p>
          </SectionCard>

          <SectionCard title="It seems everyone is talking about AI—but what's it all about?">
            <p className="text-slate-200 m-0">
              Here is the{" "}
              <ExternalTextLink href={teachingApps.aiLiteracy}>
                AI Literacy Guide
              </ExternalTextLink>{" "}
              provided by Google.
            </p>
          </SectionCard>

          <SectionCard title="Prompt Engineering for Math Students">
            <p className="text-slate-200 mb-4">
              As AI becomes more prevalent, learning how to use it effectively
              is crucial. When stuck on a math problem, don&apos;t just ask an
              AI for the answer. Instead, ask it to act as a{" "}
              <strong>Socratic tutor</strong>.
            </p>
            <p className="text-muted-foreground italic pl-4 border-l-[3px] border-sky-400 m-0">
              &ldquo;I am stuck on this calculus problem. Please don&apos;t give
              me the final answer. Instead, explain the concept of the chain
              rule as it applies here, and give me a hint on what my first step
              should be.&rdquo;
            </p>
          </SectionCard>

          <SectionCard title="Interactive Coding for Mathematics">
            <p className="text-slate-200 mb-4">
              Programming is an incredible tool for visualizing and solving
              mathematical problems. I highly recommend students explore Python
              with libraries like <code>NumPy</code>, <code>SymPy</code>, and{" "}
              <code>Matplotlib</code>.
            </p>
            <ResourceLinkList items={codingResources} />
          </SectionCard>

          <SectionCard title="Modern Visualization Tools">
            <ResourceLinkList items={visualizationResources} />
          </SectionCard>

          <SectionCard title="Mathematics Competitions">
            <p className="text-slate-200 mb-4">
              For students who enjoy challenging problem-solving and
              out-of-the-box thinking:
            </p>
            <ResourceLinkList items={competitionResources} />
          </SectionCard>
        </div>
      </TerminalWindow>
      <QuotePanel
        title="./euler_quote.sh"
        author="Leonhard Euler. Elements of Algebra (Translation from French). Chapter XIII, page 43, paragraph 144."
      >
        [...] All such expressions as √-1, √-2, √-3, √-4 &amp;c. are
        consequently impossible, or imaginary numbers, since they represent
        roots of negative quantities; and of such numbers we may truly assert
        that they are neither nothing, nor greater than nothing, nor less than
        nothing; which necessarily constitutes them imaginary, or impossible.
        [...]
      </QuotePanel>
    </PageShell>
  );
};

export default Teaching;
