const PageHeader = ({ kicker, title, children }) => {
  return (
    <header className="page-header">
      {kicker ? <p className="page-kicker">{kicker}</p> : null}
      <h1>{title}</h1>
      {children ? <div className="subtitle">{children}</div> : null}
    </header>
  );
};

export default PageHeader;
