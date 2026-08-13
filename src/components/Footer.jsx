import { useState } from "react";
import SocialLinks from "./SocialLinks";
import SiteInfoModal from "./SiteInfoModal";
import { profile } from "../data/profile";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="mt-16 border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="text-sm text-muted-foreground">
          <p className="m-0">
            &copy; {new Date().getFullYear()} {profile.shortName}
          </p>
          <button
            type="button"
            className="mt-1 text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
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
