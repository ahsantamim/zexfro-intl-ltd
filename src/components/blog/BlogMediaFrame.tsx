interface BlogMediaFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  caption?: string;
}

/**
 * Displays images of any aspect ratio (portrait, square, landscape)
 * fully visible inside a consistent modern frame.
 */
export function BlogMediaFrame({
  src,
  alt,
  priority = false,
  caption,
}: BlogMediaFrameProps) {
  return (
    <figure className="blog-media-frame">
      <div className="blog-media-frame__canvas">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="blog-media-frame__img"
        />
      </div>
      {caption && (
        <figcaption className="blog-media-frame__caption">{caption}</figcaption>
      )}
    </figure>
  );
}
