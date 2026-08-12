const SectionCard = ({ title, children }) => {
  return (
    <section className="glass-card document-section">
      {title ? <h3>{title}</h3> : null}
      {children}
    </section>
  );
};

export default SectionCard;
