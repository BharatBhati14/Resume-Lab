import { useEffect, useState } from "react";

const PAGE_WIDTH = 794;
// const PAGE_HEIGHT = 1123;

export default function ResumeViewport({ children }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const available = window.innerWidth - 32;

      setScale(Math.min(available / PAGE_WIDTH, 1));
    };

    updateScale();

    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="flex justify-center overflow-auto py-6">
      <div
        style={{
          width: PAGE_WIDTH * scale,
        }}
      >
        <div
          //   style={{
          //     width: PAGE_WIDTH,
          //     transform: `scale(${scale})`,
          //     transformOrigin: "top left",
          //   }}
          style={{
            zoom: scale,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
