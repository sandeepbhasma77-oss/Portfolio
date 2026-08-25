import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const supportsCursor = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsCursor || reduceMotion) return undefined;

    const cursor = cursorRef.current;
    let frameId;
    let pointerX = 0;
    let pointerY = 0;

    document.body.classList.add("custom-cursor-active");

    const moveCursor = (event) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frameId) return;
      frameId = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
        frameId = undefined;
      });
    };

    const updateCursorState = (event) => {
      const interactive = event.target.closest("a, button, [role='button']");
      const project = event.target.closest(".projects-card, .projects-featured");
      cursor.classList.toggle("is-interactive", Boolean(interactive));
      cursor.classList.toggle("is-project", Boolean(project));
      cursor.classList.toggle("is-button", Boolean(interactive?.classList.contains("about-magnetic")));
      cursor.querySelector("span").textContent = project ? "VIEW" : interactive ? "EXPLORE" : "";
    };

    window.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("mouseover", updateCursorState);

    return () => {
      cancelAnimationFrame(frameId);
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", moveCursor);
      document.removeEventListener("mouseover", updateCursorState);
    };
  }, []);

  return <span ref={cursorRef} className="site-cursor" aria-hidden="true"><span /></span>;
};

export default CustomCursor;
