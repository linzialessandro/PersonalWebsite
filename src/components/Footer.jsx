import { useState } from "react";
import SocialLinks from "./SocialLinks";
import SiteInfoModal from "./SiteInfoModal";
import { profile } from "../data/profile";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
