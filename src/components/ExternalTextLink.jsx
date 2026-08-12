const ExternalTextLink = ({ href, children, className = "text-link" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default ExternalTextLink;
