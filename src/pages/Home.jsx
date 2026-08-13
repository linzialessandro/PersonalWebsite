import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import SocialLinks from "../components/SocialLinks";
import { profile, researchThemes } from "../data/profile";
import { selectedPublications } from "../data/publications";
import profilePhoto from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="page-shell pt-10 md:pt-16">
      <PageMeta description={profile.tagline} />

      <section className="flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
        <img
          src={profilePhoto}
          alt="Alessandro Linzi"
          width={216}
          height={216}
          className="profile-photo"
        />
        <div className="max-w-2xl">
          <p className="page-kicker">
            {profile.honorific} · {profile.location}
          </p>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight mb-5">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {profile.tagline}
          </p>
          <div className="flex flex-wrap gap-3 items-center">
            <Link to="/publications" className="btn btn-primary">
              Research
              <ArrowRight size={16} />
            </Link>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">
              <Mail size={16} />
              Write
            </a>
          </div>
          <SocialLinks size={20} className="mt-8 gap-3" />
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-xl mb-5">Areas of work</h2>
        <div className="grid-3">
          {researchThemes.map((theme) => (
            <article key={theme.title} className="glass-card">
              <h3 className="text-base mt-0 mb-2">{theme.title}</h3>
              <p className="m-0 text-sm text-muted-foreground leading-relaxed">
                {theme.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h2 className="text-xl m-0">Selected papers</h2>
          <Link to="/publications" className="text-sm text-link">
            All publications
          </Link>
        </div>
        <div className="pub-list">
          {selectedPublications.map((pub) => (
            <article key={pub.id} className="pub-item">
              <div>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-journal">
                  {pub.venue}, {pub.year}
                </p>
              </div>
              {pub.link ? (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pub-link"
                >
                  DOI
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
