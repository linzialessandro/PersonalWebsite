import TerminalWindow from "./TerminalWindow";

const QuotePanel = ({ title, delay = 300, author, children }) => {
  return (
    <TerminalWindow title={title} delay={delay}>
      <section className="quote-section">
        <div className="quote-mark" aria-hidden="true">
          "
        </div>
        <blockquote className="quote-text">{children}</blockquote>
        <footer className="quote-author">— {author}</footer>
      </section>
    </TerminalWindow>
  );
};

export default QuotePanel;
