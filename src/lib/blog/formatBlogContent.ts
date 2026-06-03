/**
 * Wraps standalone images in the editor HTML with a consistent display frame.
 */
export function formatBlogContentImages(html: string): string {
  if (!html) return "";

  return html.replace(/<img(\s[^>]*?)\s*\/?>/gi, (match, attrs) => {
    if (/blog-media-frame__img/i.test(attrs)) {
      return match;
    }

    const cleanAttrs = attrs
      .replace(/\s*(width|height)=["'][^"']*["']/gi, "")
      .replace(/\s*class=["'][^"']*["']/gi, "");

    return `<figure class="blog-inline-media"><div class="blog-media-frame__canvas"><img${cleanAttrs} class="blog-media-frame__img" loading="lazy" decoding="async" /></div></figure>`;
  });
}
