import SocialLinks from "./SocialLinks";
import { profile } from "../data/profile";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground/80">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-foreground">{profile.shortName}</span>. All
          rights reserved.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
