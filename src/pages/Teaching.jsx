import { Download, ExternalLink } from "lucide-react";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import ExternalTextLink from "../components/ExternalTextLink";
import CopyButton from "../components/CopyButton";
import {
  aiGuides,
  aiHowTo,
  aiLastChecked,
  aiPrompts,
  aiToolGroups,
} from "../data/aiGuide";
import {
  leanGuide,
  leanIntro,
  leanLastChecked,
  leanResources,
} from "../data/leanGuide";
import {
  codingResources,
  competitionResources,
  everydayResources,
  firstTexUrl,
  italianLatexGuides,
  latexGuides,
  learningResources,
  teachingApps,
  teachingBook,
  teachingNav,
  visualizationResources,
} from "../data/teaching";

const ResourceLinkList = ({ items }) => (
  <ul className="plain-list m-0">
    {items.map((item) => (
      <li key={item.url} className="py-1.5">
        <ExternalTextLink href={item.url}>{item.label}</ExternalTextLink>
        {item.extra ? (
          <>
            {" "}
            and{" "}
            <ExternalTextLink href={item.extra.url}>
              {item.extra.label}
            </ExternalTextLink>
          </>
        ) : null}
        {item.suffix ? (
          <span className="text-muted-foreground">{item.suffix}</span>
        ) : null}
      </li>
    ))}
  </ul>
);

const Teaching = () => {
  return (
    <PageShell>
      <PageMeta
        title="Teaching"
        description="Course materials, student resources, and teaching projects."
      />
      <PageHeader kicker="Teaching" title="Materials and resources">
        A textbook, a short LaTeX guide, and a curated set of tools for students
        of mathematics.
      </PageHeader>

      <ul className="page-toc">
        {teachingNav.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>

      <div className="content-stack">
        <section id="materials" className="content-block">
          <h2>Materials</h2>
          <div className="grid-2">
            <article className="index-plate">
              <p className="page-kicker mb-2">Textbook</p>
              <h3 className="text-lg mt-0 mb-2">
                <i>{teachingBook.title}</i>
              </h3>
              <p className="text-muted-foreground m-0 mb-3">
                {teachingBook.authors}. {teachingBook.imprint}
              </p>
              <p className="prose-quiet m-0 mb-4">{teachingBook.note}</p>
              <ExternalTextLink href={teachingBook.url}>
                Read online
              </ExternalTextLink>
            </article>

            <article className="index-plate">
              <p className="page-kicker mb-2">Notes</p>
              <h3 className="text-lg mt-0 mb-2">LaTeX for a first paper</h3>
              <p className="prose-quiet m-0 mb-4">
                A short presentation on the essentials of writing mathematics in
                LaTeX.
              </p>
              <a
                href={firstTexUrl}
                download
                className="btn btn-outline w-fit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={16} />
                Download
              </a>
            </article>
          </div>
        </section>

        <section id="projects" className="content-block">
          <h2>Projects</h2>
          <div className="grid-2">
            <article className="index-plate">
              <h3 className="text-lg mt-0 mb-2">SenzaTesto</h3>
              <p className="prose-quiet m-0 mb-4">
                An open collection of AI-generated mathematics exercises for
                Italian students and teachers.
              </p>
              <ExternalTextLink href={teachingApps.senzaTesto}>
                Open SenzaTesto
              </ExternalTextLink>
            </article>
            <article className="index-plate">
              <h3 className="text-lg mt-0 mb-2">Mate-matician</h3>
              <p className="prose-quiet m-0 mb-4">
                An experimental browser app for browsing MacTutor biographies.
                It runs as a public preview on Google AI Studio and needs a
                Google account.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={teachingApps.mateStudio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-fit"
                >
                  <ExternalLink size={16} />
                  Open preview
                </a>
                <a
                  href={teachingApps.mateGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-fit"
                >
                  GitHub
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="students" className="content-block">
          <h2>For students</h2>

          <div id="students-everyday" className="mb-8">
            <h3 className="text-base mb-2">Everyday tools</h3>
            <ResourceLinkList items={everydayResources} />
          </div>

          <div id="students-typesetting" className="mb-8">
            <h3 className="text-base mb-2">Typesetting</h3>
            <ResourceLinkList items={latexGuides} />
            <p className="text-sm text-muted-foreground mt-4 mb-2">
              Italian texts by Lorenzo Pantieri:
            </p>
            <ResourceLinkList items={italianLatexGuides} />
          </div>

          <div id="students-learning" className="mb-8">
            <h3 className="text-base mb-2">Learn and practice</h3>
            <ResourceLinkList items={learningResources} />
          </div>

          <div id="students-computation" className="mb-8">
            <h3 className="text-base mb-2">Computation</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Python with NumPy, SymPy, and Matplotlib is enough to start.
            </p>
            <ResourceLinkList items={codingResources} />
          </div>

          <div id="students-visualization" className="mb-8">
            <h3 className="text-base mb-2">Visualization</h3>
            <ResourceLinkList items={visualizationResources} />
          </div>

          <div id="students-problems" className="mb-8">
            <h3 className="text-base mb-2">Problems</h3>
            <ResourceLinkList items={competitionResources} />
          </div>

          <div id="students-lean" className="mb-8">
            <h3 className="text-base mb-2">Formalizing mathematics in Lean</h3>
            {leanIntro.map((paragraph) => (
              <p key={paragraph} className="prose-quiet mb-3">
                {paragraph}
              </p>
            ))}
            <p className="text-sm text-muted-foreground mb-3">
              Last checked: {leanLastChecked}.
            </p>
            <ResourceLinkList items={leanResources} />
            <p className="mt-4 mb-0">
              <a
                href={`${import.meta.env.BASE_URL}guides/${leanGuide.file}`}
                download
                className="btn btn-outline w-fit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Download ${leanGuide.title} (PDF)`}
              >
                <Download size={16} />
                {`${leanGuide.title} (PDF)`}
              </a>
            </p>
          </div>
        </section>

        <section id="ai" className="content-block">
          <h2>Working with AI</h2>
          <p className="prose-quiet mb-6">
            If you are stuck, do not ask a model for the answer. Ask it to act
            as a Socratic tutor: explain the relevant idea and give a first
            hint.
          </p>

          <div id="ai-method" className="mb-8">
            <h3 className="text-base mb-2">How to use it</h3>
            <ol className="list-decimal pl-5 m-0">
              {aiHowTo.map((step) => (
                <li key={step.title} className="py-1.5">
                  <strong>{step.title}</strong> {step.text}
                </li>
              ))}
            </ol>
          </div>

          <div id="ai-tools" className="mb-8">
            <h3 className="text-base mb-2">Tools by task</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Last checked: {aiLastChecked}. These tools change quickly.
            </p>
            {aiToolGroups.map((group) => (
              <div key={group.id} id={`ai-tools-${group.id}`} className="mb-6">
                <h4 className="text-sm font-semibold mb-1">{group.title}</h4>
                <ResourceLinkList items={group.tools} />
                <p className="text-sm text-muted-foreground mt-1 mb-0">
                  {group.caution}
                </p>
              </div>
            ))}
          </div>

          <div id="ai-prompts" className="mb-8">
            <h3 className="text-base mb-2">Prompts to copy</h3>
            <p className="text-sm text-muted-foreground">
              Replace the parts in brackets before you send them.
            </p>
            <ul className="plain-list m-0">
              {aiPrompts.map((p) => (
                <li key={p.id} className="py-3">
                  <h4 className="text-sm font-semibold mb-1">{p.title}</h4>
                  <p className="prose-quiet mb-2">{p.text}</p>
                  <CopyButton
                    text={p.text}
                    label="Copy"
                    ariaLabel={`Copy prompt: ${p.title}`}
                    className="btn btn-outline w-fit"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div id="ai-guides" className="mb-8">
            <h3 className="text-base mb-2">Guides (PDF)</h3>
            <div className="grid-2">
              {aiGuides.map((g) => (
                <article key={g.file} className="index-plate">
                  <h4 className="text-sm font-semibold mt-0 mb-2">{g.title}</h4>
                  <p className="prose-quiet m-0 mb-4">{g.description}</p>
                  <a
                    href={`${import.meta.env.BASE_URL}guides/${g.file}`}
                    download
                    className="btn btn-outline w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Download ${g.title} (PDF)`}
                  >
                    <Download size={16} />
                    Download PDF
                  </a>
                </article>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground m-0">
            Google’s{" "}
            <ExternalTextLink href={teachingApps.aiLiteracy}>
              AI Literacy Guide
            </ExternalTextLink>{" "}
            is a short, general introduction.
          </p>
        </section>
      </div>
    </PageShell>
  );
};

export default Teaching;
