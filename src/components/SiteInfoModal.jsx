import { createPortal } from "react-dom";
import { X } from "lucide-react";
import TerminalWindow from "./TerminalWindow";
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
        <TerminalWindow title="./site_info.sh" delay={0}>
          <div className="flex flex-col gap-6 p-2">
            <div className="flex justify-between items-center gap-4">
              <h2 id="site-info-title" className="m-0">
                Site Information
              </h2>
              <button
                onClick={onClose}
                className="modal-close-btn"
                aria-label="Close site information"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div className="info-block">
                <h3 className="text-[1.1rem] mb-2 flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Open Source
                </h3>
                <p>
                  This entire website is open source under the MIT License.
                  Explore the source on{" "}
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
                <h3 className="text-[1.1rem] mb-2 flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Privacy
                </h3>
                <p>
                  There are no cookies, trackers, or third-party font requests
                  here. Fonts are served from this site. The only indexing
                  mechanism is Google Search Console verification.
                </p>
              </div>

              <div className="info-block">
                <h3 className="text-[1.1rem] mb-2 flex items-center gap-2">
                  <span className="text-accent">&gt;</span> Acknowledgements
                </h3>
                <p>
                  Some tasks in building this website were delegated to AI
                  agents. I am gratefully indebted to those silicon-based
                  assistants—they type faster than me and do not require coffee
                  breaks.
                </p>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>,
    document.body
  );
};

export default SiteInfoModal;
