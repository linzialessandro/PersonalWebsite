import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";
import { dialogues, poetry } from "../data/aiGallery";
import aiArtImage from "../assets/ai-art.webp";

const AIGallery = () => {
  return (
    <PageShell>
      <PageMeta
        title="Dialogues"
        description="Imagined conversations with historical mathematicians, written with AI."
      />
      <PageHeader kicker="Dialogues" title="Imagined conversations">
        Short dialogues with historical mathematicians, written with AI. They
        are not historical documents.
      </PageHeader>

      <div className="content-stack">
        <section className="content-block">
          <h2>Texts</h2>
          <div>
            {dialogues.map((person) => (
              <article key={person.name} className="resource-row">
                <div>
                  <a
                    href={person.url}
                    download={`${person.name}.pdf`}
                    className="text-link font-medium"
                  >
                    {person.name}
                  </a>
                  {person.lang ? (
                    <span className="ml-2 text-xs text-muted-foreground uppercase tracking-wide">
                      {person.lang}
                    </span>
                  ) : null}
                </div>
                <p className="m-0 text-muted-foreground">{person.topic}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block">
          <h2>Verses</h2>
          <div className="grid-2">
            {poetry.map((poem) => (
              <article key={poem.title} className="glass-card">
                <h3 className="text-base mt-0 mb-3">{poem.title}</h3>
                <p className="text-muted-foreground italic leading-7 text-[0.95rem] m-0">
                  {poem.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block">
          <h2>Image</h2>
          <figure className="m-0 max-w-xl">
            <img
              src={aiArtImage}
              alt="AI generated image titled The Mandelbrot Dream"
              width={1024}
              height={1024}
              className="w-full rounded-lg border border-white/10"
            />
            <figcaption className="text-muted-foreground mt-3 text-sm">
              The Mandelbrot Dream. Generated with AI.
            </figcaption>
          </figure>
        </section>
      </div>
    </PageShell>
  );
};

export default AIGallery;
