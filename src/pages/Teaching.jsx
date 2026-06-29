import React from "react";
import { ExternalLink, Book, FileText, Download } from "lucide-react";
import firstTexUrl from "../assets/FirstTeX.pdf";
import TerminalWindow from "../components/TerminalWindow";

const Teaching = () => {
  return (
    <div className="container" style={{ paddingTop: "2rem" }}>
      <TerminalWindow title="./teaching_resources.sh" delay={0}>
        <div className="page-header" style={{ padding: "1rem 0" }}>
          <h1 style={{ marginBottom: "1rem" }}>Teaching</h1>
        </div>

        <div className="document-content text-left">
          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>
              Book for Slovenian students of the School of Engineering and
              Management.
            </h3>
            <ul
              style={{
                paddingLeft: "1.5rem",
                marginBottom: "1rem",
                color: "#f3f4f6",
              }}
            >
              <li>
                I. Cristea, H. Bordbar, A. Linzi.{" "}
                <i>Matematika za gospodarski inženiring.</i> V Novi Gorici:
                Založba Univerze. ISBN: 978-961-7025-41-5. Pressbooks, 2024.{" "}
                <a
                  href="https://books.ung.si/calculus22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa", textDecoration: "underline" }}
                >
                  [LINK]
                </a>
              </li>
            </ul>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>GeoGebra</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              <a
                href="https://www.geogebra.org/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#60a5fa", textDecoration: "underline" }}
              >
                GeoGebra
              </a>{" "}
              is a free mathematics platform that empowers students and
              educators with dynamic tools for learning and teaching. This
              comprehensive suite offers an extensive collection of interactive
              mathematical resources available directly through your web
              browser.
            </p>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>LaTeX for Your First Paper</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1.5rem" }}>
              A concise essential guide written by me in the form of a
              presentation.
            </p>
            <a
              href={firstTexUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ display: "flex", gap: "0.5rem", width: "fit-content" }}
            >
              <Download size={18} /> Download Presentation
            </a>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>LaTeX Resources for Users and Beginners</h3>

            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              <li>
                <a
                  href="https://tug.org/TUGboat/Articles/tb23-2/tb74flynn.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  A beginner's introduction to typesetting with LaTeX
                </a>{" "}
                — A gentle introduction by Peter Flynn.
              </li>
              <li>
                <a
                  href="https://texdoc.org/serve/TeXbyTopic.pdf/0"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  TeX by Topic
                </a>{" "}
                — A free online book by Victor Eijkhout.
              </li>
              <li>
                <a
                  href="https://www.maths.tcd.ie/~dwilkins/LaTeXPrimer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Getting started with LaTeX
                </a>{" "}
                — A dedicated webpage by David R. Wilkins.
              </li>
              <li>
                <a
                  href="https://users.dimi.uniud.it/~gianluca.gorni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  TeX page
                </a>{" "}
                — Maintained by Prof. Gianluca Gorni.
              </li>
            </ul>

            <h4
              style={{
                marginTop: "1.5rem",
                marginBottom: "0.5rem",
                color: "#fff",
              }}
            >
              Italian Resources
            </h4>
            <p style={{ color: "#9ca3af", marginBottom: "0.5rem" }}>
              Three very useful texts by Lorenzo Pantieri which I still consult
              very often:
            </p>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              <li>
                <a
                  href="http://www.lorenzopantieri.net/LaTeX_files/ArteLaTeX.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  L'arte di scrivere con LaTeX
                </a>
              </li>
              <li>
                <a
                  href="http://www.lorenzopantieri.net/LaTeX_files/LaTeXimpaziente.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  LaTeX per l'impaziente
                </a>
              </li>
              <li>
                <a
                  href="http://www.lorenzopantieri.net/LaTeX_files/LaTeXpedia.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  LaTeXpedia
                </a>
              </li>
            </ul>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Mate-ematician</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              MacTutor is a free online resource containing biographies of more
              than 3000 mathematicians. <i>Mate-matician</i> is an app which I
              created to discover the wonderful MacTutor biographies repository
              in an interactive way. The app can be accessed through this link,
              using a google account. The link redirects to the public preview
              on the Google AI Studio platform. Let the browser load the app,
              then set it to full screen and try it yourself!
            </p>
            <p style={{ color: "#f3f4f6", marginBottom: "1.5rem" }}>
              Alternatively, you may clone the corresponding GitHub repository.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a
                href="https://aistudio.google.com/apps/c765648a-02a0-4004-97fc-af6eb15db905"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ display: "flex", gap: "0.5rem", width: "fit-content" }}
              >
                <ExternalLink size={18} /> Open App in AI Studio
              </a>
              <a
                href="https://github.com/linzialessandro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: "flex", gap: "0.5rem", width: "fit-content" }}
              >
                <ExternalLink size={18} /> View GitHub Repo
              </a>
            </div>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>
              It seems everyone is talking about AI—but what's it all about?
            </h3>
            <p style={{ color: "#f3f4f6" }}>
              Here is the{" "}
              <a
                href="https://services.google.com/fh/files/misc/bia_ai-literacy-guide_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#60a5fa", textDecoration: "underline" }}
              >
                AI Literacy Guide
              </a>{" "}
              provided by Google.
            </p>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Prompt Engineering for Math Students</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              As AI becomes more prevalent, learning how to use it effectively
              is crucial. When stuck on a math problem, don't just ask an AI for
              the answer. Instead, ask it to act as a{" "}
              <strong>Socratic tutor</strong>.
            </p>
            <p
              style={{
                color: "#9ca3af",
                fontStyle: "italic",
                paddingLeft: "1rem",
                borderLeft: "3px solid #60a5fa",
              }}
            >
              "I am stuck on this calculus problem. Please don't give me the
              final answer. Instead, explain the concept of the chain rule as it
              applies here, and give me a hint on what my first step should be."
            </p>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Interactive Coding for Mathematics</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              Programming is an incredible tool for visualizing and solving
              mathematical problems. I highly recommend students explore Python
              with libraries like <code>NumPy</code>, <code>SymPy</code>, and{" "}
              <code>Matplotlib</code>.
            </p>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              <li>
                <a
                  href="https://colab.research.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Google Colab
                </a>{" "}
                — Run Python directly in your browser with zero setup.
              </li>
              <li>
                <a
                  href="https://scipy-lectures.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  SciPy Lectures
                </a>{" "}
                — Great tutorials for learning scientific computing in Python.
              </li>
            </ul>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Modern Visualization Tools</h3>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              <li>
                <a
                  href="https://www.desmos.com/calculator"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Desmos Graphing Calculator
                </a>{" "}
                — A beautiful, intuitive, and widely used online graphing
                calculator.
              </li>
              <li>
                <a
                  href="https://www.3blue1brown.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  3Blue1Brown
                </a>{" "}
                &amp;{" "}
                <a
                  href="https://www.manim.community/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Manim
                </a>{" "}
                — Incredible math animations and the open-source Python engine
                used to create them.
              </li>
            </ul>
          </div>

          <div
            className="glass-card document-section"
            style={{ marginBottom: "2rem" }}
          >
            <h3>Mathematics Competitions</h3>
            <p style={{ color: "#f3f4f6", marginBottom: "1rem" }}>
              For students who enjoy challenging problem-solving and
              out-of-the-box thinking:
            </p>
            <ul
              style={{
                paddingLeft: "1.5rem",
                color: "#f3f4f6",
                lineHeight: "2",
              }}
            >
              <li>
                <a
                  href="https://projecteuler.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Project Euler
                </a>{" "}
                — A series of challenging mathematical/computer programming
                problems.
              </li>
              <li>
                <a
                  href="https://artofproblemsolving.com/community/c13_contests"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#60a5fa" }}
                >
                  Art of Problem Solving (AoPS)
                </a>{" "}
                — An amazing community and archive of math olympiad problems
                from around the world.
              </li>
            </ul>
          </div>
        </div>
      </TerminalWindow>
      <TerminalWindow title="./euler_quote.sh" delay={300}>
        <section className="quote-section" style={{ padding: "2rem 0" }}>
          <div className="quote-mark">"</div>
          <p className="quote-text serif" style={{ fontSize: "1.2rem" }}>
            <i>
              [...] All such expressions as √-1, √-2, √-3, √-4 &amp;c. are
              consequently impossible, or imaginary numbers, since they
              represent roots of negative quantities; and of such numbers we may
              truly assert that they are neither nothing, nor greater than
              nothing, nor less than nothing; which necessarily constitutes them
              imaginary, or impossible. [...]
            </i>
          </p>
          <span className="quote-author">
            — Leonhard Euler. Elements of Algebra (Translation from French).
            Chapter XIII, page 43, paragraph 144.
          </span>
        </section>
      </TerminalWindow>
    </div>
  );
};

export default Teaching;
