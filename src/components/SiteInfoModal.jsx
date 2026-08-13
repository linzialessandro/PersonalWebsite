import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useDialog } from "../hooks/useDialog";
import { profile } from "../data/profile";

const SiteInfoModal = ({ isOpen, onClose }) => {
  const dialogRef = useDialog({ isOpen, onClose });

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={dialogRef}
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="site-info-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between items-start gap-4 mb-5">
          <h2 id="site-info-title" className="m-0 text-xl">
            About this site
          </h2>
          <button
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Close site information"
          >
            <X size={20} />
          </button>
        </div>

        <div className="info-block">
          <h3>Source</h3>
          <p>
            The site is open source under the MIT License. The code is on{" "}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              GitHub
            </a>
            .
          </p>
        </div>

        <div className="info-block">
          <h3>Privacy</h3>
          <p>
            There are no cookies or analytics. Fonts are served from this site.
            A Google Search Console file is present only so the pages can be
            indexed.
          </p>
        </div>

        <div className="info-block">
          <h3>Acknowledgements</h3>
          <p>
            Some implementation work was done with the help of AI programming
            assistants.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default SiteInfoModal;
