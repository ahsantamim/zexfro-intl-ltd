"use client";

import { useEffect, useState } from "react";
import { formatBlogContentImages } from "@/lib/blog/formatBlogContent";

interface SanitizedHtmlProps {
  html: string;
  className?: string;
  formatImages?: boolean;
}

export function SanitizedHtml({
  html,
  className,
  formatImages = false,
}: SanitizedHtmlProps) {
  const [sanitized, setSanitized] = useState("");

  useEffect(() => {
    let cancelled = false;

    import("isomorphic-dompurify")
      .then(({ default: DOMPurify }) => {
        if (cancelled) return;
        const clean = DOMPurify.sanitize(html || "");
        setSanitized(formatImages ? formatBlogContentImages(clean) : clean);
      })
      .catch((error) => {
        console.error("Failed to sanitize HTML:", error);
      });

    return () => {
      cancelled = true;
    };
  }, [html, formatImages]);

  if (!sanitized) {
    return <div className={className} />;
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
