import { useState } from "react";

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  throw new Error("Clipboard unavailable");
}

const CopyButton = ({ text, label, ariaLabel, className }) => {
  const [status, setStatus] = useState("idle");

  const onCopy = async () => {
    try {
      await copyText(text);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    window.setTimeout(() => setStatus("idle"), 1600);
  };

  const visible =
    status === "copied"
      ? "Copied"
      : status === "failed"
        ? "Copy failed"
        : label;

  const accessibleName = ariaLabel
    ? status === "idle"
      ? ariaLabel
      : visible
    : undefined;

  return (
    <button
      type="button"
      className={className}
      onClick={onCopy}
      aria-live="polite"
      aria-label={accessibleName}
    >
      {visible}
    </button>
  );
};

export default CopyButton;
