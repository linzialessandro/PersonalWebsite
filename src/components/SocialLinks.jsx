import {
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  ScrollText,
  ShoppingBag,
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
    external: false,
  },
  {
    href: profile.links.orcid,
    label: "ORCID",
    Icon: OrcidIcon,
    external: true,
  },
  {
    href: profile.links.scholar,
    label: "Google Scholar",
    Icon: GraduationCap,
    external: true,
  },
  {
    href: profile.links.arxiv,
    label: "arXiv",
    Icon: ScrollText,
    external: true,
  },
  {
    href: profile.links.github,
    label: "GitHub",
    Icon: Github,
    external: true,
  },
  {
    href: profile.links.linkedin,
    label: "LinkedIn",
    Icon: Linkedin,
    external: true,
  },
  {
    href: profile.links.gumroad,
    label: "Gumroad",
    Icon: ShoppingBag,
    external: true,
  },
];

const SocialLinks = ({ size = 18, className = "" }) => {
  return (
    <div className={`flex items-center gap-1.5 ${className}`.trim()}>
      {items.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          className="social-icon-link"
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
