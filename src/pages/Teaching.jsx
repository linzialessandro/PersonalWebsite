import { Download, ExternalLink } from "lucide-react";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import ExternalTextLink from "../components/ExternalTextLink";
import {
  codingResources,
  competitionResources,
  firstTexUrl,
  italianLatexGuides,
  latexGuides,
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
          <article className="glass-card mb-4">
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

          <article className="glass-card">
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
        </section>

        <section id="projects" className="content-block">
          <h2>Projects</h2>
          <article className="glass-card mb-4">
            <h3 className="text-lg mt-0 mb-2">SenzaTesto</h3>
            <p className="prose-quiet m-0 mb-4">
              An open collection of AI-generated mathematics exercises for
              Italian students and teachers.
            </p>
            <ExternalTextLink href={teachingApps.senzaTesto}>
              Open SenzaTesto
            </ExternalTextLink>
          </article>
          <article className="glass-card">
            <h3 className="text-lg mt-0 mb-2">Mate-matician</h3>
            <p className="prose-quiet m-0 mb-4">
              An experimental browser app for browsing MacTutor biographies. It
              runs as a public preview on Google AI Studio and needs a Google
              account.
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
        </section>

        <section id="students" className="content-block">
          <h2>For students</h2>

          <div className="mb-8">
            <h3 className="text-base mb-2">Typesetting</h3>
            <ResourceLinkList items={latexGuides} />
            <p className="text-sm text-muted-foreground mt-4 mb-2">
              Italian texts by Lorenzo Pantieri:
            </p>
            <ResourceLinkList items={italianLatexGuides} />
          </div>

          <div className="mb-8">
            <h3 className="text-base mb-2">Computation and pictures</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Python with NumPy, SymPy, and Matplotlib is enough to start.
            </p>
            <ResourceLinkList items={codingResources} />
            <div className="mt-3">
              <ResourceLinkList items={visualizationResources} />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-base mb-2">Problems</h3>
            <ResourceLinkList items={competitionResources} />
          </div>

          <div>
            <h3 className="text-base mb-2">Working with AI</h3>
            <p className="prose-quiet mb-3">
              If you are stuck, do not ask a model for the answer. Ask it to act
              as a Socratic tutor: explain the relevant idea and give a first
              hint.
            </p>
            <p className="text-sm text-muted-foreground m-0">
              Google’s{" "}
              <ExternalTextLink href={teachingApps.aiLiteracy}>
                AI Literacy Guide
              </ExternalTextLink>{" "}
              is a short, general introduction.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default Teaching;
