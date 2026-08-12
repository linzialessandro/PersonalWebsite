import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_NAME, absoluteUrl } from "../lib/site";

const PageMeta = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} · ${SITE_NAME}` : SITE_NAME;

    if (description) {
      const desc = document.querySelector('meta[name="description"]');
      desc?.setAttribute("content", description);
      document
        .querySelector('meta[property="og:description"]')
        ?.setAttribute("content", description);
    }

    const url = absoluteUrl(pathname);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("href", url);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", document.title);
  }, [title, description, pathname]);

  return null;
};

export default PageMeta;
