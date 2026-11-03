import { useState } from "react";
import ExternalTextLink from "./ExternalTextLink";
import SocialLinks from "./SocialLinks";
import SiteInfoModal from "./SiteInfoModal";
import { profile } from "../data/profile";

const Footer = ({ pathname = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Keep support links away from teaching/student resources.
  const showSupport = !/\/teaching(\/|$)/.test(pathname);

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="text-sm text-muted-foreground">
          <p className="m-0">
            &copy; {new Date().getFullYear()} {profile.shortName}
          </p>
          <button
            type="button"
            className="mt-1 text-muted-foreground hover:text-accent transition-colors underline-offset-4 hover:underline"
            onClick={() => setIsModalOpen(true)}
          >
            About this site
          </button>
          {showSupport && (
            <p className="mt-1 mb-0">
              Like my writing? Support it on{" "}
              <ExternalTextLink href={profile.links.gumroad}>
                Gumroad
              </ExternalTextLink>{" "}
              or{" "}
              <ExternalTextLink href={profile.links.buymeacoffee}>
                Buy Me a Coffee
              </ExternalTextLink>
              .
            </p>
          )}
        </div>
        <SocialLinks />
      </div>
      <SiteInfoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
