  import React from "react";
import styles from "./bubble.module.css";

const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-zinc-950">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"My Bike , My Pookie".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;