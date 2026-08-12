import TerminalWindow from "../components/TerminalWindow";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import QuotePanel from "../components/QuotePanel";
import SectionCard from "../components/SectionCard";
import ExternalTextLink from "../components/ExternalTextLink";
import { colleagues, otherLinks } from "../data/academicNet";

const ColleagueItem = ({ person }) => {
  const name = person.url ? (
    <ExternalTextLink href={person.url}>{person.name}</ExternalTextLink>
  ) : (
    person.name
  );

  return (
    <li>
      {name}
      {person.links?.length
        ? person.links.map((link, index) => (
            <span key={link.url}>
              {index === 0 ? " (" : ", "}
              <ExternalTextLink href={link.url}>{link.text}</ExternalTextLink>
              {index === person.links.length - 1 ? ")" : ""}
            </span>
          ))
        : null}
    </li>
  );
};

const AcademicNet = () => {
  return (
    <PageShell>
      <PageMeta
        title="Academic Net"
        description="Collaborators and mathematical reference links."
      />
      <TerminalWindow title="cat academic-net.md" delay={0}>
        <div className="page-header">
          <h1>Academic Net</h1>
        </div>

        <div className="document-content">
          <SectionCard title="Colleagues">
            <ul>
              {colleagues.map((person) => (
                <ColleagueItem key={person.name} person={person} />
              ))}
            </ul>
          </SectionCard>

          <SectionCard title="Other links">
            <ul>
              {otherLinks.map((item) => (
                <li key={item.url}>
                  <ExternalTextLink href={item.url}>
                    {item.text}
                  </ExternalTextLink>
                  {item.suffix}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </TerminalWindow>
      <QuotePanel
        title="./mandelbrot_quote.sh"
        author="Benoit Mandelbrot. The Fractal Geometry of Nature. 1977."
      >
        I claim that many patterns of Nature are so irregular and fragmented,
        that, compared with Euclid—a term used in this work to denote all of
        standard geometry—Nature exhibits not simply a higher degree but an
        altogether different level of complexity.
      </QuotePanel>
    </PageShell>
  );
};

export default AcademicNet;
