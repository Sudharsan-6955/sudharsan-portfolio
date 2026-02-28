"use client";
import { useEffect, useRef } from "react";

export default function SnowCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = [];

    const snowCount = 400; // increased quantity for more snow

    for (let i = 0; i < snowCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 0.8 + 0.4, // much smaller snow size
        speedY: Math.random() * 0.7 + 0.2, // slightly slower for small flakes
        speedX: Math.random() * 0.3 - 0.15,
      });
    }

    function drawSnow() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakes.forEach((snow) => {
        // Mouse interaction
        if (mouse.current.x !== null) {
          const dx = snow.x - mouse.current.x;
          const dy = snow.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            snow.x += dx / dist;
            snow.y += dy / dist;
          }
        }

        snow.y += snow.speedY;
        snow.x += snow.speedX;

        if (snow.y > canvas.height) {
          snow.y = 0;
          snow.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(snow.x, snow.y, snow.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(drawSnow);
    }

    drawSnow();

    window.addEventListener("mousemove", (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-0"
    />
  );
}