import React, { useEffect, useRef, useState } from 'react';

const TerminalWindow = ({ title = 'bash', children, delay = 0 }) => {
  const contentRef = useRef(null);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Collect text nodes
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    const nodes = [];
    let n;
    while ((n = walk.nextNode())) {
      if (n.nodeValue.trim().length > 0) {
        nodes.push({
          node: n,
          originalText: n.nodeValue,
        });
      }
    }

    // Clear text content temporarily
    nodes.forEach(n => n.node.nodeValue = '');

    // Hide images and SVGs temporarily
    const mediaElements = el.querySelectorAll('img, svg, .social-icon');
    mediaElements.forEach(e => {
      e.style.opacity = '0';
      e.style.transition = 'opacity 0.5s ease';
    });

    let nodeIndex = 0;
    let charIndex = 0;
    let timeoutId;

    // Create the blinking cursor
    const cursor = document.createElement('span');
    cursor.className = 'terminal-cursor';
    cursor.textContent = '█';

    // Start typing after initial delay
    const startTimeoutId = setTimeout(() => {
      typeNextChar();
    }, delay);

    function typeNextChar() {
      if (nodeIndex >= nodes.length) {
        // Finish typing
        setIsTyping(false);
        if (cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
        // Reveal media elements
        mediaElements.forEach(e => {
          e.style.opacity = '1';
        });
        return;
      }

      const current = nodes[nodeIndex];
      
      // If we are starting a new node, append the cursor after it
      if (charIndex === 0 && current.node.parentNode) {
        current.node.parentNode.insertBefore(cursor, current.node.nextSibling);
      }

      if (charIndex < current.originalText.length) {
        current.node.nodeValue = current.originalText.substring(0, charIndex + 1);
        charIndex++;
        // Speed up typing for large blocks (random interval 2-15ms)
        timeoutId = setTimeout(typeNextChar, Math.random() * 13 + 2);
      } else {
        nodeIndex++;
        charIndex = 0;
        timeoutId = setTimeout(typeNextChar, 10);
      }
    }

    return () => {
      clearTimeout(startTimeoutId);
      clearTimeout(timeoutId);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      // On unmount, restore texts if aborted
      nodes.forEach(n => {
        if (n.node.nodeValue !== n.originalText) {
          n.node.nodeValue = n.originalText;
        }
      });
      mediaElements.forEach(e => {
        e.style.opacity = '1';
      });
    };
  }, [delay]);

  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="close"></span>
          <span className="minimize"></span>
          <span className="maximize"></span>
        </div>
        <div className="terminal-title">{title}</div>
      </div>
      <div className="terminal-body" ref={contentRef}>
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
