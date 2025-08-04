import { cloneElement, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

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
 * @param {number?} props.delay - Optional delay to start the animation in milliseconds. Default is `100`.
 * @param {number?} props.duration - Optional duration of the animation in seconds. Default is `0.6`.
 *
 * @returns {JSX.Element} The same child element enhanced with line-based animation on scroll.
 */
const TextReveal = ({
  children,
  start = 100,
  delay = 0,
  duration = 0.6,
  className = "",
}) => {
  const elementRef = useRef();

  useGSAP(() => {
    let split = SplitText.create(elementRef.current, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) => {
        return gsap.from(self.lines, {
          duration: duration,
          y: "100%",
          opacity: 0,
          scrollTrigger: {
            trigger: elementRef.current,
            start: `top ${start}%`,
          },
          stagger: 0.1,
          delay: delay,
          ease: "circ.out",
        });
      },
    });

    return () => {
      split.revert();
    };
  }, []);

  return cloneElement(children, {
    ref: elementRef,
    className: `${children.props.className || ""} ${className}`,
  });
};

export default TextReveal;
