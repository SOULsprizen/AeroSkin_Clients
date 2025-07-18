import React, { useEffect, useRef } from "react";

export const SFT = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    resizeText();

    window.addEventListener("resize", resizeText);

    return () => {
      window.removeEventListener("resize", resizeText);
    };
  }, []);

  const resizeText = () => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const containerWidth = container.offsetWidth;
    let min = 1;
    let max = 2500;

    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      text.style.fontSize = mid + "px";

      if (text.offsetWidth <= containerWidth) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    text.style.fontSize = max + "px";
  };

  return (
    <div
      className="flex h-screen w-full items-center overflow-hidden bg-zinc-950"
      ref={containerRef}
    >
      <span
        className="absolute  mx-auto whitespace-nowrap text-center font-bold uppercase text-white"
        ref={textRef}
      >
        The Day I will be able to tell the world that I am a Software Engineer
      </span>
    </div>
  );
};