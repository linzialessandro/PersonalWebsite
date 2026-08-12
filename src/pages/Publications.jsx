import TerminalWindow from "../components/TerminalWindow";
import PublicationItem from "../components/PublicationItem";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import QuotePanel from "../components/QuotePanel";
import ExternalTextLink from "../components/ExternalTextLink";
import { publications, preprints, submissions } from "../data/publications";

const PubList = ({ items, numbered = true }) => (
  <div className="pub-list">
    {items.map((pub, index) => (
      <PublicationItem
        key={pub.id ?? pub.title}
        pub={pub}
        index={numbered ? index + 1 : undefined}
      />
    ))}
  </div>
);

const Publications = () => {
  return (
    <PageShell>
      <PageMeta
        title="Publications"
        description="Research papers, preprints, and submissions by Alessandro Linzi."
      />
      <TerminalWindow title="cat publications.txt" delay={0}>
        <div className="page-header">
          <h1>Publications</h1>
          <p className="subtitle">
            The following list is ordered increasingly by year of publication.
          </p>
        </div>

        <div className="document-content">
          <PubList items={publications} />
        </div>

        <h2 className="mt-16 mb-8">Preprints</h2>
        <div className="document-content">
          <PubList items={preprints} />
        </div>

        <h2 className="mt-16 mb-8">Submissions</h2>
        <div className="document-content">
          <PubList items={submissions} numbered={false} />
        </div>
      </TerminalWindow>
      <QuotePanel
        title="./wiles_quote.sh"
        author={
          <>
            Andrew Wiles on Solving Fermat (
            <ExternalTextLink href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905?showAssistant=true&showCode=true">
              interview transcript
            </ExternalTextLink>
            )
          </>
        }
      >
        My mind is now at rest.
      </QuotePanel>
    </PageShell>
  );
};

export default Publications;
