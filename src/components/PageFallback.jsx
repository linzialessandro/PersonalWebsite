const PageFallback = () => {
  return (
    <div className="page-shell" role="status" aria-live="polite">
      <p className="text-muted-foreground">Loading…</p>
    </div>
  );
};

export default PageFallback;
