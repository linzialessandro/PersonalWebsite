import React from "react";
import { Download } from "lucide-react";

const ResourceCard = ({
  title,
  subtitle,
  icon: Icon,
  color,
  link,
  linkText,
  isDownload,
  bgOpacity = "0.2",
  borderColor = "rgba(255, 255, 255, 0.1)",
}) => {
  return (
    <div
      className="resource-card"
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        borderRadius: "12px",
        border: `1px solid ${borderColor}`,
        padding: "1rem",
      }}
    >
      <div
        className="resource-info"
        style={{ display: "flex", alignItems: "center", gap: "1rem" }}
      >
        {Icon && (
          <div
            style={{
              background: color.replace("1)", bgOpacity),
              padding: "0.75rem",
              borderRadius: "50%",
            }}
          >
            <Icon
              size={20}
              color={color.replace(/rgba?\(.*?,\s*(.*?)\)/, "$1")}
              style={{ color: color }}
            />
          </div>
        )}
        <div>
          <h4
            style={{
              margin: 0,
              fontSize: "1.1rem",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {title}
          </h4>
          {subtitle && (
            <p
              style={{
                margin: "0.2rem 0 0 0",
                color: "#9ca3af",
                fontSize: "0.85rem",
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {link && (
        <a
          href={link}
          download={isDownload}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.9rem",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          {isDownload && <Download size={16} />}
          {linkText || (isDownload ? "Download" : "Open")}
        </a>
      )}
    </div>
  );
};

export default ResourceCard;
