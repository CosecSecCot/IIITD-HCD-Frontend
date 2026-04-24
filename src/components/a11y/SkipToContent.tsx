/**
 * Skip to content link. Visually hidden until it receives keyboard focus,
 * then slides into view at the top-left of the viewport. Lets keyboard
 * users jump past the navbar directly to the main content of the page.
 *
 * Target: any element on the page with id="main-content" (typically the
 * <main> element). If no element has that id, the link still scrolls to
 * the top of the document.
 */
export default function SkipToContent() {
  return (
    <a href="#main-content" className="skip-to-content">
      Skip to main content
    </a>
  );
}
