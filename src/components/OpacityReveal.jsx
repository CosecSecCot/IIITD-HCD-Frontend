import { cloneElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, useGSAP);

/**
 * `TextReveal` applies a scroll-triggered, line-by-line reveal animation to a single child text element.
 * Utilizes GSAP's `SplitText` and `ScrollTrigger` to animate individual lines as they enter the viewport.
 * The animation runs only once per scroll and cleans up on unmount.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactElement} props.children - The single React element (usually a text wrapper like `<p>` or `<h2>`) to which the animation is applied.
 * @param {string?} props.className - Optional additional class names to append to the child element.
 * @param {number?} props.start - Optional ScrollTrigger `start` offset (percentage from top of viewport). Default is `100`.
 * @param {number?} props.duration - Optional duration of the animation in seconds. Default is `0.6`.
 * @param {number?} props.delay - Optional delay to start the animation in seconds. Default is `100`.
 *
 * @returns {JSX.Element} The same child element enhanced with line-based animation on scroll.
 */
const OpacityReveal = ({
  children,
  start = 100,
  duration = 1.5,
  delay = 0,
  className = "",
}) => {
  const elementRef = useRef();

  useGSAP(() => {
    gsap.from(elementRef.current, {
      duration: duration,
      opacity: 0,
      scrollTrigger: {
        trigger: elementRef.current,
        start: `top ${start}%`,
      },
      stagger: 0.1,
      delay: delay,
      ease: "expo.out",
    });
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} ${className}`,
  });
};

export default OpacityReveal;
