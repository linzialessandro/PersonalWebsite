import {
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ScrollText,
} from "lucide-react";
import { profile } from "../data/profile";

const OrcidIcon = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.75" />
    <path
      d="M8.15 7.4v9.2M11.2 12.05c0-1.72 1.28-2.9 3.08-2.9 1.84 0 3.07 1.22 3.07 2.9s-1.23 2.95-3.07 2.95c-1.8 0-3.08-1.2-3.08-2.95Zm0-4.65v9.2"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
  </svg>
);

const items = [
  {
    href: `mailto:${profile.email}`,
    label: "Email",
    Icon: Mail,
    hoverClass: "hover:text-accent hover:bg-accent/10",
    external: false,
  },
  {
    href: profile.links.orcid,
    label: "ORCID",
    Icon: OrcidIcon,
    hoverClass: "hover:text-[#A6CE39] hover:bg-[#A6CE39]/10",
    external: true,
  },
  {
    href: profile.links.scholar,
    label: "Google Scholar",
    Icon: GraduationCap,
    hoverClass: "hover:text-accent hover:bg-accent/10",
    external: true,
  },
  {
    href: profile.links.arxiv,
    label: "arXiv",
    Icon: ScrollText,
    hoverClass: "hover:text-[#b31b1b] hover:bg-[#b31b1b]/10",
    external: true,
  },
  {
    href: profile.links.github,
    label: "GitHub",
    Icon: Github,
    hoverClass: "hover:text-foreground hover:bg-white/5",
    external: true,
  },
  {
    href: profile.links.linkedin,
    label: "LinkedIn",
    Icon: Linkedin,
    hoverClass: "hover:text-[#0a66c2] hover:bg-[#0a66c2]/10",
    external: true,
  },
];

const SocialLinks = ({ size = 18, className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`.trim()}>
      {items.map(({ href, label, Icon, hoverClass, external }) => (
        <a
          key={label}
          href={href}
          className={`p-2 text-muted-foreground rounded-full transition-all duration-300 ${hoverClass}`}
          aria-label={label}
          title={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
