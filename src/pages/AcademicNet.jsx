import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import ExternalTextLink from "../components/ExternalTextLink";
import { colleagues, otherLinks } from "../data/academicNet";

function listedLinks(links) {
  return Array.isArray(links) ? links : [];
}

const ColleagueName = ({ person }) => {
  if (!person.url) return person.name;
  return <ExternalTextLink href={person.url}>{person.name}</ExternalTextLink>;
};

const ColleagueLinks = ({ links }) => {
  const items = listedLinks(links);
  if (items.length === 0) return null;
  return (
    <span className="colleague-links">
      {items.map((link) => (
        <ExternalTextLink key={link.url} href={link.url}>
          {link.text}
        </ExternalTextLink>
      ))}
    </span>
  );
};

const ColleagueCard = ({ person }) => (
  <article className="colleague-card">
    <span className="colleague-name">
      <ColleagueName person={person} />
    </span>
    <ColleagueLinks links={person.links} />
  </article>
);

const ReferenceRow = ({ item }) => (
  <article className="resource-row">
    <ExternalTextLink href={item.url}>{item.label}</ExternalTextLink>
    <p className="m-0 text-muted-foreground">{item.text}</p>
  </article>
);

const AcademicNet = () => {
  return (
    <PageShell>
      <PageMeta
        title="Network"
        description="Collaborators and reference sites in valuation theory and hyperstructures."
      />
      <PageHeader kicker="Network" title="People and references">
        Colleagues I have worked with, and a few sites I return to.
      </PageHeader>

      <div className="content-stack">
        <section className="content-block">
          <h2>People</h2>
          <div className="colleague-grid">
            {colleagues.map((person) => (
              <ColleagueCard key={person.name} person={person} />
            ))}
          </div>
        </section>

        <section className="content-block">
          <h2>References</h2>
          <div>
            {otherLinks.map((item) => (
              <ReferenceRow key={item.url} item={item} />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default AcademicNet;
