import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import PageMeta from "../components/PageMeta";
import TerminalWindow from "../components/TerminalWindow";

const NotFound = () => {
  return (
    <PageShell>
      <PageMeta
        title="Not found"
        description="The requested page does not exist."
      />
      <TerminalWindow title="bash: command not found" delay={0}>
        <div className="page-header">
          <h1>404</h1>
          <p className="subtitle">
            No page at this path. The command you entered is not in the site
            map.
          </p>
        </div>
        <p className="text-accent mt-6">
          &gt; Try{" "}
          <Link to="/" className="text-link">
            cd /home
          </Link>
        </p>
      </TerminalWindow>
    </PageShell>
  );
};

export default NotFound;
