import { useEffect, useRef } from "react";

const PageReveal = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const config = {
      imageCount: 5,
      imageLifespan: 750,
      removalDelay: 50,
      mouseThreshold: 50,
      scrollThreshold: 50,
      idleCursorInterval: 300,
      inDuration: 500,
      outDuration: 500,
      inEasing: "cubic-bezier(.07, .5, .5, 1)",
      outEasing: "cubic-bezier(.87, 0, .13, 1)",
    };

    const images = Array.from(
      { length: config.imageCount },
      (_, i) => `/${i + 1}.jpg`,
    );

    let mouseX = 0,
      mouseY = 0,
      lastMouseX = 0,
      lastMouseY = 0;
    let isMoving = false,
      isCursorInContainer = 0;
    let lastSteadyImageTime = 0;

    const container = containerRef.current;

    const isInContainer = (x, y) => {
      const rect = container.getBoundingClientRect();
      return (
        x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
      );
    };

    const setInitialMousePos = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      lastMouseX = mouseX;
      lastMouseY = mouseY;
      isCursorInContainer = isInContainer(mouseX, mouseY);
      document.removeEventListener("mouseover", setInitialMousePos, false);
    };

    document.addEventListener("mouseover", setInitialMousePos, false);

    const hasMovedEnough = () => {
      const distance = Math.sqrt(
        Math.pow(mouseX - lastMouseX, 2) + Math.pow(mouseY - lastMouseY, 2),
      );
      return distance > config.mouseThreshold;
    };

    const createImage = () => {
      const img = document.createElement("img");
      img.classList.add("trail-img");
      const randomIndex = Math.floor(Math.random() * images.length);
      const rotation = (Math.random() - 0.5) * 25;
      img.src = images[randomIndex];

      const rect = container.getBoundingClientRect();
      const relativeX = mouseX - rect.left;
      const relativeY = mouseY - rect.top;

      img.style.position = "absolute";
      img.style.left = `${relativeX}px`;
      img.style.top = `${relativeY}px`;
      img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
      img.style.transition = `transform ${config.inDuration}ms ${config.inEasing}`;

      container.appendChild(img);

      requestAnimationFrame(() => {
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(1)`;
      });

      // Remove the image after lifespan
      setTimeout(() => {
        img.style.transition = `transform ${config.outDuration}ms ${config.outEasing}`;
        img.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0)`;
        setTimeout(() => {
          container.removeChild(img);
        }, config.outDuration);
      }, config.imageLifespan);
    };

    const createTrailImage = () => {
      if (!isCursorInContainer) return;
      const now = Date.now();

      if (isMoving && hasMovedEnough()) {
        lastMouseX = mouseX;
        lastMouseY = mouseY;
        createImage();
        return;
      }

      if (!isMoving && now - lastSteadyImageTime > config.idleCursorInterval) {
        lastSteadyImageTime = now;
        createImage();
      }
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isCursorInContainer = isInContainer(mouseX, mouseY);
      isMoving = true;
    };

    const interval = setInterval(createTrailImage, 50);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="page-reveal-container"
      className="fixed z-[1000] top-0 w-full h-[100vh] bg-[#69C2BD]/20 overflow-hidden"
    >
      <div className="w-full h-full bg-white flex justify-center items-center">
        <h1 className="text-black/25 text-5xl">(MOVE YOUR CURSOR)</h1>
      </div>
    </div>
  );
};

export default PageReveal;
