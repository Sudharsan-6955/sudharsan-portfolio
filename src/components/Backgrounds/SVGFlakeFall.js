import { useEffect, useRef } from "react";

const snowflakeSVG = `<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="white" stroke-width="2" stroke-linecap="round"><line x1="16" y1="2" x2="16" y2="30" /><line x1="2" y1="16" x2="30" y2="16" /><line x1="6.93" y1="6.93" x2="25.07" y2="25.07" /><line x1="25.07" y1="6.93" x2="6.93" y2="25.07" /></g></svg>`;
const unicodeFlakeSVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="16" y="24" text-anchor="middle" font-size="28" fill="white">❄</text></svg>`;

export default function SVGFlakeFall() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let running = true;
    const flakes = [];
    function createFlake() {
      const flake = document.createElement("div");
      // Randomly pick one of the two SVGs
      const svg = Math.random() < 0.5 ? snowflakeSVG : unicodeFlakeSVG;
      flake.innerHTML = svg;
      flake.style.position = "fixed";
      flake.style.left = `${Math.random() * 90 + 5}vw`;
      flake.style.top = "-40px";
      // Randomize size between 12px and 24px
      const size = Math.random() * 12 + 12;
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;
      flake.style.pointerEvents = "none";
      flake.style.zIndex = 30;
      flake.style.opacity = "0.85";
      flake.style.transition = "transform 0.2s";
      flake.style.filter = "drop-shadow(0 0 6px #fff8)";
      container.appendChild(flake);
      flakes.push(flake);
      animateFlake(flake);
    }
    function animateFlake(flake) {
      let y = -40;
      let speed = 1.2 + Math.random() * 0.7;
      let sway = Math.random() * 30 + 10;
      let swaySpeed = 0.01 + Math.random() * 0.01;
      let t = Math.random() * 100;
      function fall() {
        if (!running) return;
        t += swaySpeed;
        y += speed;
        const xOffset = Math.sin(t) * sway;
        flake.style.transform = `translateY(${y}px) translateX(${xOffset}px)`;
        if (y < window.innerHeight + 40) {
          requestAnimationFrame(fall);
        } else {
          flake.remove();
          if (running) setTimeout(createFlake, Math.random() * 500);
        }
      }
      fall();
    }
    // Start with 30 flakes for higher density
    for (let i = 0; i < 30; i++) {
      setTimeout(createFlake, i * 200);
    }
    return () => {
      running = false;
      flakes.forEach(flake => flake.remove());
    };
  }, []);

  return <div ref={containerRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 30 }} />;
}
