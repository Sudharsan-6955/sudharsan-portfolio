'use client';

import { useEffect, useRef, useCallback } from "react";
import { useSnowflakes } from "@/contexts/SnowflakeContext";

const snowflakeSVG = `<svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="white" stroke-width="2" stroke-linecap="round"><line x1="16" y1="2" x2="16" y2="30" /><line x1="2" y1="16" x2="30" y2="16" /><line x1="6.93" y1="6.93" x2="25.07" y2="25.07" /><line x1="25.07" y1="6.93" x2="6.93" y2="25.07" /></g></svg>`;
const unicodeFlakeSVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><text x="16" y="24" text-anchor="middle" font-size="28" fill="white">❄</text></svg>`;

export default function SVGFlakeFall() {
  const containerRef = useRef(null);
  const runningRef = useRef(false);
  const flakesRef = useRef([]);
  const { isActive } = useSnowflakes();

  const createFlake = useCallback((container) => {
    if (!container || !runningRef.current) return;

    const flake = document.createElement("div");
    const svg = Math.random() < 0.5 ? snowflakeSVG : unicodeFlakeSVG;
    flake.innerHTML = svg;
    flake.style.cssText = `
      position: fixed;
      left: ${Math.random() * 90 + 5}vw;
      top: -40px;
      width: ${window.innerWidth <= 640 ? 1 : Math.random() * 12 + 12}px;
      height: ${window.innerWidth <= 640 ? 1 : Math.random() * 12 + 12}px;
      pointer-events: none;
      z-index: 30;
      opacity: 0.85;
      transition: transform 0.2s;
      filter: drop-shadow(0 0 6px #fff8);
    `;
    
    container.appendChild(flake);
    flakesRef.current.push(flake);
    animateFlake(flake, container);
  }, []);

  const animateFlake = useCallback((flake, container) => {
    let y = -40;
    const speed = 1.2 + Math.random() * 0.7;
    const sway = Math.random() * 30 + 10;
    const swaySpeed = 0.01 + Math.random() * 0.01;
    let t = Math.random() * 100;

    const fall = () => {
      if (!runningRef.current) return;
      
      t += swaySpeed;
      y += speed;
      const xOffset = Math.sin(t) * sway;
      flake.style.transform = `translateY(${y}px) translateX(${xOffset}px)`;

      if (y < window.innerHeight + 40) {
        requestAnimationFrame(fall);
      } else {
        flake.remove();
        const index = flakesRef.current.indexOf(flake);
        if (index > -1) {
          flakesRef.current.splice(index, 1);
        }
        if (runningRef.current) {
          setTimeout(() => createFlake(container), Math.random() * 500);
        }
      }
    };
    
    fall();
  }, [createFlake]);

  useEffect(() => {
    const container = containerRef.current;
    if (!isActive || !container) {
      // Cleanup when inactive
      runningRef.current = false;
      flakesRef.current.forEach(flake => {
        if (flake && flake.parentNode) {
          flake.remove();
        }
      });
      flakesRef.current = [];
      return;
    }

    runningRef.current = true;
    
    // Start with 30 flakes for higher density
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createFlake(container), i * 200);
    }

    return () => {
      runningRef.current = false;
      flakesRef.current.forEach(flake => {
        if (flake && flake.parentNode) {
          flake.remove();
        }
      });
      flakesRef.current = [];
    };
  }, [isActive, createFlake]);

  return <div ref={containerRef} style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 30 }} />;
}
