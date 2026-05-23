"use client";

import { useEffect, useRef } from "react";

export const MeshGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      time += 0.005;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Simple but effective GPU-accelerated mesh feel
      const drawBlob = (x: number, y: number, radius: number, color: string) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      };

      ctx.globalCompositeOperation = "screen";

      // Everlend Teal Blob
      const tealX = canvas.width * (0.5 + 0.2 * Math.sin(time));
      const tealY = canvas.height * (0.2 + 0.1 * Math.cos(time * 0.8));
      drawBlob(tealX, tealY, 600, "rgba(0, 245, 212, 0.08)");

      // Solana Violet Blob
      const violetX = canvas.width * (0.8 + 0.1 * Math.cos(time * 1.2));
      const violetY = canvas.height * (0.5 + 0.2 * Math.sin(time * 0.5));
      drawBlob(violetX, violetY, 800, "rgba(153, 69, 255, 0.05)");

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60"
    />
  );
};
