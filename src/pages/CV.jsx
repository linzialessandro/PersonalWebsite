import { Download } from "lucide-react";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import ExternalTextLink from "../components/ExternalTextLink";
import { cvData, education, positions, service } from "../data/cv";
import profilePhoto from "../assets/profile.jpg";

const Timeline = ({ items }) => (
  <div className="timeline">
    {items.map((item) => (
      <article key={`${item.org}-${item.years}`} className="timeline-item">
        <p className="timeline-years">{item.years}</p>
        <div>
          <h3 className="timeline-org">{item.org}</h3>
          <p className="timeline-role">
            {item.role}
            {item.place ? ` · ${item.place}` : ""}
          </p>
          {item.unit ? <p className="timeline-role">{item.unit}</p> : null}
        </div>
      </article>
    ))}
  </div>
);

const CV = () => {
  return (
    <PageShell>
      <PageMeta
        title="Curriculum Vitae"
        description="Appointments, education, and CV download for Alessandro Linzi."
      />
      <div className="flex flex-col sm:flex-row sm:items-start gap-6 mb-2">
        <img
          src={profilePhoto}
          alt="Alessandro Linzi"
          width={104}
          height={104}
          className="portrait-sm"
        />
        <PageHeader
          kicker="Curriculum Vitae"
          title="Appointments and education"
        >
          A short record of academic posts and degrees. The full document is
          available as a PDF.
        </PageHeader>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        <a
          href={cvData.pdfUrl}
          download="cv-alessandro-linzi.pdf"
          className="btn btn-primary"
        >
          <Download size={16} />
          Download PDF
        </a>
      </div>

      <div className="content-stack">
        <section className="content-block">
          <h2>Appointments</h2>
          <Timeline items={positions} />
        </section>

        <section className="content-block">
          <h2>Education</h2>
          <Timeline items={education} />
        </section>

        <section className="content-block">
          <h2>Editorial work</h2>
          <ul className="plain-list prose-quiet m-0">
            {service.map((item) => (
              <li key={item} className="py-1">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <p className="text-sm text-muted-foreground m-0">
          An experimental conversational interface over this material is{" "}
          <ExternalTextLink href={cvData.aiCvLink}>
            available here
          </ExternalTextLink>
          .
        </p>
      </div>
    </PageShell>
  );
};

export default CV;
