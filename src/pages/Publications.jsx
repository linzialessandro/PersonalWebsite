import React from "react";
import TerminalWindow from "../components/TerminalWindow";

const Publications = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="cat publications.txt" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Publications</h1>
          <p className="subtitle">
            The following list is ordered increasingly by year of publications.
          </p>
        </div>

        <div className="document-content text-left">
          <div className="pub-list">
            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                1. Oettli-Théra and Caristi-Kirk ball spaces and applications.
              </h3>
              <p className="pub-authors">
                P. Blaszkiewicz, H. Cmiel, <strong>A. Linzi</strong>, P.
                Szewczyk.
              </p>
              <p className="pub-journal">
                J. of fixed point theory and applications, Vol. 21, No. 98.
                2019.
              </p>
              <a
                href="https://doi.org/10.1007/s11784-019-0729-4"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                2. Orderings and valuations in hyperfields.
              </h3>
              <p className="pub-authors">
                K. Kuhlmann, <strong>A. Linzi</strong>, H. Stojalowska.
              </p>
              <p className="pub-journal">
                J. of Algebra, Vol. 611, pages 399-421. 2022.
              </p>
              <a
                href="https://doi.org/10.1016/j.jalgebra.2022.08.006"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                3. Characteristic, C-characteristic and positive cones in
                hyperfields.
              </h3>
              <p className="pub-authors">
                D. E. Kędzierski, <strong>A. Linzi</strong> and H. Stojalowska.
              </p>
              <p className="pub-journal">Mathematics, 11(3): 779. 2023.</p>
              <a
                href="https://doi.org/10.3390/math11030779"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                4. Dependence relations and grade fuzzy set.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong> and I. Cristea.
              </p>
              <p className="pub-journal">Symmetry, 15(2):311. 2023.</p>
              <a
                href="https://doi.org/10.3390/sym15020311"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                5. A result of Krasner in categorial form.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">Mathematics, 11(24): 4923. 2023.</p>
              <a
                href="https://doi.org/10.3390/math11244923"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                6. Polygroup objects in regular categories.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">AIMS Mathematics, 9(5). 2024.</p>
              <a
                href="https://doi.org/10.3934/math.2024552"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                7. Notes on valuation theory for Krasner hyperfields.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">Isr. J. Math. 2025.</p>
              <a
                href="https://doi.org/10.1007/s11856-025-2721-6"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                8. Preface to the Special Issue "Algebraic Structures and Graph
                Theory, 2nd Edition".
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong> and I. Cristea.
              </p>
              <p className="pub-journal">Mathematics, 13(4):577. 2025.</p>
              <a
                href="https://doi.org/10.3390/math13040577"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                9. On the hyperfields associated to valued fields.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong> and P. Touchard.
              </p>
              <p className="pub-journal">
                Journal of Pure and Applied Algebra. 2025.
              </p>
              <a
                href="https://doi.org/10.1016/j.jpaa.2025.107985"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                10. Hypervaluations on hyperfields and ordered canonical
                hypergroups.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>, H. Stojalowska.
              </p>
              <p className="pub-journal">
                Iranian J. of mathematical sciences and informatics 20(2). 2025.
              </p>
              <a
                href="https://ijmsi.ir/article-1-2055-en.html"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                11. On algebraically closed Krasner hyperfields.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">
                Italian Journal of Pure and Applied Mathematics 54. 2025.
              </p>
              <a
                href="https://ijpam.uniud.it/online_issue/202554/08%20Linzi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>

            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                12. L-mosaics and orthomodular lattices.
              </h3>
              <p className="pub-authors">
                N. Cangiotti, <strong>A. Linzi</strong> and E. Talotti.
              </p>
              <p className="pub-journal">
                Italian Journal of Pure and Applied Mathematics 54. 2025.
              </p>
              <a
                href="https://ijpam.uniud.it/online_issue/202554/04%20Cangiotti-Linzi-Talotti.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                View Publication ↗
              </a>
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}>Preprints</h2>
        <div className="document-content text-left">
          <div className="pub-list">
            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                1. L-Mosaics and Bounded Join-Semilattices in Isabelle/HOL.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">2025.</p>
              <a
                href="https://www.arxiv.org/abs/2509.19854"
                target="_blank"
                rel="noopener noreferrer"
                className="pub-link"
              >
                arXiv:2509.19854 ↗
              </a>
            </div>
          </div>
        </div>

        <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}>Submissions</h2>
        <div className="document-content text-left">
          <div className="pub-list">
            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                A Horn Theory of Fields and Certain Hyperfields.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">submitted.</p>
            </div>
            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                On the graded rings and Krasner hyperfields of valued fields.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">submitted.</p>
            </div>
            <div className="glass-card pub-item" style={{ padding: "1.5rem" }}>
              <h3 className="pub-title">
                On some classes of multivalued algebraic structures.
              </h3>
              <p className="pub-authors">
                <strong>A. Linzi</strong>.
              </p>
              <p className="pub-journal">submitted.</p>
            </div>
          </div>
        </div>
      </TerminalWindow>
      <TerminalWindow title="./wiles_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p
            className="quote-text serif"
            style={{ fontSize: "0.95rem", color: "var(--muted-foreground)" }}
          >
            <i>My mind is now at rest.</i>
          </p>
          <span className="quote-author">
            — Andrew Wiles on Solving Fermat (
            <a
              href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905?showAssistant=true&showCode=true"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent-primary)",
                textDecoration: "underline",
              }}
            >
              interview transcript
            </a>
            )
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default Publications;
