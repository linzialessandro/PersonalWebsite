import { Download, ExternalLink } from "lucide-react";

const ResourceCard = ({
  title,
  subtitle,
  description,
  icon: Icon,
  tone = "violet",
  link,
  linkText,
  isDownload,
  downloadName,
  badge,
  stacked = false,
}) => {
  const iconClass =
    tone === "cyan"
      ? "resource-icon resource-icon-cyan"
      : tone === "green"
        ? "resource-icon resource-icon-green"
        : "resource-icon resource-icon-violet";

  return (
    <article
      className={`resource-card${stacked ? " resource-card-stack" : ""}`}
    >
      <div
        className="resource-info"
        style={stacked ? { alignItems: "flex-start" } : undefined}
      >
        {Icon ? (
          <div className={iconClass}>
            <Icon size={20} />
          </div>
        ) : null}
        <div>
          <h4 className="m-0 text-[1.1rem] text-on-primary flex items-center gap-2">
            {title}
            {badge ? (
              <span className="text-[0.7rem] font-normal tracking-wide px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                {badge}
              </span>
            ) : null}
          </h4>
          {subtitle ? (
            <p className="mt-1 mb-0 text-sm text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
          {description ? (
            <p className="mt-2 mb-0 text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      {link ? (
        <a
          href={link}
          download={isDownload ? downloadName || true : undefined}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          {isDownload ? <Download size={16} /> : <ExternalLink size={16} />}
          {linkText || (isDownload ? "Download" : "Open")}
        </a>
      ) : null}
    </article>
  );
};

export default ResourceCard;
