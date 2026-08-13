import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import PageHeader from "../components/PageHeader";

const NotFound = () => {
  return (
    <PageShell>
      <PageMeta
        title="Not found"
        description="The requested page does not exist."
      />
      <PageHeader kicker="404" title="This page is not here">
        The address does not match a page on this site.
      </PageHeader>
      <p className="m-0">
        <Link to="/" className="text-link">
          Back to the home page
        </Link>
      </p>
    </PageShell>
  );
};

export default NotFound;
