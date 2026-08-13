import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import PublicationItem from "../components/PublicationItem";
import {
  groupByYear,
  preprints,
  publications,
  submissions,
} from "../data/publications";

const YearList = ({ items }) => (
  <div>
    {groupByYear(items).map(([year, group]) => (
      <section key={year}>
        <h3 className="pub-year">{year}</h3>
        <div className="pub-list">
          {group.map((pub) => (
            <PublicationItem key={pub.id ?? pub.title} pub={pub} />
          ))}
        </div>
      </section>
    ))}
  </div>
);

const Publications = () => {
  return (
    <PageShell>
      <PageMeta
        title="Research"
        description="Papers, preprints, and submissions by Alessandro Linzi."
      />
      <PageHeader kicker="Research" title="Publications">
        Peer-reviewed articles, preprints, and work under review. Listed newest
        first.
      </PageHeader>

      <ul className="page-toc">
        <li>
          <a href="#articles">Articles</a>
        </li>
        <li>
          <a href="#preprints">Preprints</a>
        </li>
        <li>
          <a href="#submitted">Submitted</a>
        </li>
      </ul>

      <div className="content-stack">
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
              <PublicationItem key={pub.id ?? pub.title} pub={pub} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default Publications;
