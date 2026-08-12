const PageFallback = () => {
  return (
    <div className="page-shell" role="status" aria-live="polite">
      <p className="font-mono text-muted-foreground">Loading…</p>
    </div>
  );
};

export default PageFallback;
