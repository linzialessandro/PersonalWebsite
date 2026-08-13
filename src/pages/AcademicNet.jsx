import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import ExternalTextLink from "../components/ExternalTextLink";
import { colleagues, otherLinks } from "../data/academicNet";

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
              <article key={person.name} className="colleague-card">
                <span className="colleague-name">
                  {person.url ? (
                    <ExternalTextLink href={person.url}>
                      {person.name}
                    </ExternalTextLink>
                  ) : (
                    person.name
                  )}
                </span>
                {person.links?.length ? (
                  <span className="colleague-links">
                    {person.links.map((link) => (
                      <ExternalTextLink key={link.url} href={link.url}>
                        {link.text}
                      </ExternalTextLink>
                    ))}
                  </span>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="content-block">
          <h2>References</h2>
          <div>
            {otherLinks.map((item) => (
              <article key={item.url} className="resource-row">
                <ExternalTextLink href={item.url}>
                  {item.label}
                </ExternalTextLink>
                <p className="m-0 text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
};

export default AcademicNet;
