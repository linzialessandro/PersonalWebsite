import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { applyPageMeta } from "../lib/pageMeta";

const PageMeta = ({ title, description }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    applyPageMeta({ title, description, pathname });
  }, [title, description, pathname]);

  return null;
};

export default PageMeta;
