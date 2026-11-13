import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import PublicationItem from "../components/PublicationItem";
import ExternalTextLink from "../components/ExternalTextLink";
import { groupByYear } from "../lib/groupByYear";
import { publicationKey } from "../lib/publicationDisplay";
import { formalization } from "../data/formalization";
import {
  preprints,
  publications,
  researchProfiles,
  submissions,
} from "../data/publications";

const YearList = ({ items }) => (
  <div>
    {groupByYear(items).map(([year, group]) => (
      <section key={year} className="year-group">
        <h3 className="pub-year">{year}</h3>
        <div className="pub-list">
          {group.map((pub) => (
            <PublicationItem key={publicationKey(pub)} pub={pub} />
          ))}
        </div>
      </section>
    ))}
  </div>
);

const Rich = ({ parts }) =>
  parts.map((part, i) =>
    typeof part === "string" ? part : <i key={i}>{part.v}</i>
  );

const Publications = () => {
  return (
    <PageShell>
      <PageMeta
        title="Research"
        description="Papers, preprints, and research profiles for Alessandro Linzi."
      />
      <PageHeader kicker="Research" title="Publications">
        Peer-reviewed articles, preprints, and work under review. Listed newest
        first. Profile indexes for citation databases sit above the lists.
      </PageHeader>

      <ul className="page-toc">
        <li>
          <a href="#profiles">Profiles</a>
        </li>
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#preprints">Preprints</a>
        </li>
        <li>
          <a href="#submitted">Submitted</a>
        </li>
        <li>
          <a href={`#${formalization.id}`}>{formalization.title}</a>
        </li>
      </ul>

      <div className="content-stack">
        <section id="profiles" className="content-block">
          <h2>Research profiles</h2>
          <div className="profile-ledger" role="list">
            {researchProfiles.map((profile) => (
              <div
                key={profile.label}
                className="profile-ledger-row"
                role="listitem"
              >
                <span className="profile-ledger-label">{profile.label}</span>
                <ExternalTextLink href={profile.url} className="pub-link">
                  {profile.host}
                </ExternalTextLink>
              </div>
            ))}
          </div>
        </section>

        <section id="articles" className="content-block">
          <h2>Articles</h2>
          <YearList items={publications} />
        </section>

        <section id="preprints" className="content-block">
          <h2>Preprints</h2>
          <YearList items={preprints} />
        </section>

        <section id="submitted" className="content-block">
          <h2>Submitted</h2>
          <div className="pub-list">
            {submissions.map((pub) => (
              <PublicationItem key={publicationKey(pub)} pub={pub} />
            ))}
          </div>
        </section>

        <section id={formalization.id} className="content-block">
          <h2>{formalization.title}</h2>
          <p className="prose-quiet mb-6">
            {formalization.intro.map((seg, i) => {
              const text = seg.italic ? <i>{seg.text}</i> : seg.text;
              return seg.link ? (
                <ExternalTextLink key={i} href={formalization[seg.link]}>
                  {text}
                </ExternalTextLink>
              ) : (
                <span key={i}>{text}</span>
              );
            })}
          </p>
          <p
            className="text-lg my-6"
            role="math"
            aria-label={formalization.inequalityLabel}
          >
            <Rich parts={formalization.inequality} />
          </p>
          <h3 className="text-base mb-2">{formalization.resultsHeading}</h3>
          <ul className="plain-list prose-quiet m-0 mb-6">
            {formalization.results.map((parts) => (
              <li
                key={typeof parts[0] === "string" ? parts[0] : parts[0].v}
                className="py-1.5"
              >
                <Rich parts={parts} />
              </li>
            ))}
          </ul>
          <p className="prose-quiet mb-4">{formalization.leanVersion}</p>
          <ul className="plain-list prose-quiet m-0">
            {formalization.links.map((link) => (
              <li key={link.href} className="py-1.5">
                <ExternalTextLink href={formalization[link.href]}>
                  {link.label}
                </ExternalTextLink>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageShell>
  );
};

export default Publications;
