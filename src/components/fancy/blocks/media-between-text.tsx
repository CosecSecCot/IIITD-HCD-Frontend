"use client";

import React, {
  ElementType,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  ReactNode,
} from "react";
import { motion, useInView, UseInViewOptions, Variants } from "motion/react";

import { cn } from "@/lib/utils";

interface MediaBetweenTextProps {
  /**
   * The text (or element) to display before the media
   */
  firstText: ReactNode;

  /**
   * The text (or element) to display after the media
   */
  secondText: ReactNode;

  /**
   * children to render between the two text elements (image, video, component, etc.)
   */
  children?: ReactNode;

  /**
   * Optional class name for the media container
   */
  mediaContainerClassName?: string;

  /**
   * HTML Tag to render the text elements as
   * @default p
   */
  as?: ElementType;

  /**
   * Type of animation trigger
   * @default "hover"
   */
  triggerType?: "hover" | "ref" | "inView";

  /**
   * Reference to container element for inView trigger
   */
  containerRef?: React.RefObject<HTMLDivElement>;

  /**
   * Options for useInView hook
   */
  useInViewOptionsProp?: UseInViewOptions;

  /**
   * Custom animation variants
   */
  animationVariants?: {
    initial: Variants["initial"];
    animate: Variants["animate"];
  };

  /**
   * Optional class name for the root element
   */
  className?: string;

  /**
   * Optional class name for the left text element
   */
  leftTextClassName?: string;

  /**
   * Optional class name for the right text element
   */
  rightTextClassName?: string;
}

export type MediaBetweenTextRef = {
  animate: () => void;
  reset: () => void;
};

export const MediaBetweenText = forwardRef<
  MediaBetweenTextRef,
  MediaBetweenTextProps
>(
  (
    {
      firstText,
      secondText,
      children,
      mediaContainerClassName,
      as = "p",
      triggerType = "hover",
      containerRef,
      useInViewOptionsProp = {
        once: true,
        amount: 0.5,
        root: containerRef,
      },
      animationVariants = {
        initial: { width: 0, opacity: 1 },
        animate: {
          width: "auto",
          opacity: 1,
          transition: { duration: 0.4, type: "spring", bounce: 0 },
        },
      },
      className,
      leftTextClassName,
      rightTextClassName,
    },
    ref
  ) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const isInView =
      triggerType === "inView"
        ? useInView(componentRef || containerRef, useInViewOptionsProp)
        : false;
    const [isHovered, setIsHovered] = useState(false);

    useImperativeHandle(ref, () => ({
      animate: () => setIsAnimating(true),
      reset: () => setIsAnimating(false),
    }));

    const shouldAnimate =
      triggerType === "hover"
        ? isHovered
        : triggerType === "inView"
        ? isInView
        : triggerType === "ref"
        ? isAnimating
        : false;

    // motion.create(as) returns a motion-enabled component of the provided tag
    const TextComponent = motion.create(as);

    return (
      <div
        className={cn("flex items-center", className)}
        ref={componentRef}
        onMouseEnter={() => triggerType === "hover" && setIsHovered(true)}
        onMouseLeave={() => triggerType === "hover" && setIsHovered(false)}
      >
        <TextComponent layout className={cn("leading-none", leftTextClassName)}>
          {firstText}
        </TextComponent>

        <motion.div
          className={cn("overflow-hidden", mediaContainerClassName)}
          variants={animationVariants}
          initial="initial"
          animate={shouldAnimate ? "animate" : "initial"}
        >
          {children}
        </motion.div>

        <TextComponent
          layout
          className={cn("leading-none", rightTextClassName)}
        >
          {secondText}
        </TextComponent>
      </div>
    );
  }
);

MediaBetweenText.displayName = "MediaBetweenText";

export default MediaBetweenText;
