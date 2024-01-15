import { useEffect, useRef } from "react";

function Starbackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars: any = [];
    const numStars = 200;
    for (let i = 0; i < numStars; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const radius = Math.random() * 2;
      const velocity = Math.random() * 2 + 1;

      stars.push({ x, y, radius, velocity });
    }
    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of stars) {
        star.y += star.velocity;
        if (star.y > canvas.height) {
          star.y = 0;
        }
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fillStyle = "#FFFFFF";
        context.fill();
      }
      requestAnimationFrame(drawStars);
    };

    drawStars();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="stars"
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1, opacity: 0.5 }}
    ></canvas>
  );
}

export default Starbackground;
