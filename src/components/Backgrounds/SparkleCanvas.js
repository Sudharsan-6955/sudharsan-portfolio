"use client";
import { useEffect, useRef } from "react";

export default function SparkleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Sparkle image
    const sparkleImg = new window.Image();
    sparkleImg.src = "/Assets/Backgrounds/sparkle.png"; // Place your sparkle image here

    const sparkles = [];
    const sparkleCount = 30;
    for (let i = 0; i < sparkleCount; i++) {
      sparkles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 8,
        speedY: Math.random() * 0.5 + 0.1,
        speedX: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.5,
        twinkle: Math.random() * Math.PI * 2,
      });
    }

    function drawSparkles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sparkles.forEach((sparkle) => {
        sparkle.y += sparkle.speedY;
        sparkle.x += sparkle.speedX;
        sparkle.twinkle += 0.05;
        const twinkleOpacity = sparkle.opacity * (0.7 + 0.3 * Math.sin(sparkle.twinkle));
        ctx.globalAlpha = twinkleOpacity;
        if (sparkleImg.complete) {
          ctx.drawImage(sparkleImg, sparkle.x, sparkle.y, sparkle.size, sparkle.size);
        }
        ctx.globalAlpha = 1;
        if (sparkle.y > canvas.height) {
          sparkle.y = -sparkle.size;
          sparkle.x = Math.random() * canvas.width;
        }
        if (sparkle.x < -sparkle.size || sparkle.x > canvas.width + sparkle.size) {
          sparkle.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(drawSparkles);
    }

    drawSparkles();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-0"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
}
