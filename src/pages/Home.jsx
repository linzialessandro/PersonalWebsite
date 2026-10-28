import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import PageMeta from "../components/PageMeta";
import SocialLinks from "../components/SocialLinks";
import { profile, researchThemes } from "../data/profile";
import { selectedPublications } from "../data/publications";
import profilePhoto from "../assets/profile.jpg";

const Home = () => {
  return (
    <div className="page-shell">
      <PageMeta description={profile.tagline} />

      <section className="monograph-hero">
        <div className="monograph-dossier">
          <div className="dossier-header">
            <img
              src={profilePhoto}
              alt="Alessandro Linzi"
              width={152}
              height={188}
              className="profile-photo"
            />
            <div>
              <p className="page-kicker">
                {profile.honorific}, {profile.location}
              </p>
              <h1 className="hero-title">{profile.name}</h1>
              <p className="monograph-epigraph">{profile.tagline}</p>
            </div>
          </div>
          <div className="dossier-actions">
            <Link to="/publications" className="btn btn-primary">
              Research
            </Link>
            <a href={`mailto:${profile.email}`} className="btn btn-outline">
              <Mail size={16} />
              Write
            </a>
            <SocialLinks size={18} className="sm:ml-auto" />
          </div>
        </div>

        <aside className="seminar-index" aria-labelledby="areas-heading">
          <h2 id="areas-heading" className="seminar-index-heading">
            Areas of work
          </h2>
          <ol className="seminar-index-list">
            {researchThemes.map((theme, idx) => (
              <li key={theme.title} className="seminar-index-item">
                <span className="seminar-index-num">0{idx + 1}</span>
                <div>
                  <h3 className="seminar-index-title">{theme.title}</h3>
                  <p className="seminar-index-text">{theme.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </section>

      <section className="mt-16">
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
