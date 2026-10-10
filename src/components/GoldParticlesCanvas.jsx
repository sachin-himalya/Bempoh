import React, { useEffect, useRef } from 'react';

export default function GoldParticlesCanvas({ count = 55, interactive = true }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse interactive target
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Initialize rich metallic gold dust particles designed for clarity on white & light backgrounds
    const goldColors = ['#D4A338', '#C99B3C', '#A97622', '#8C5B0D', '#E2C268', '#B57E1E'];

    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 1.0,
      color: goldColors[Math.floor(Math.random() * goldColors.length)],
      alpha: Math.random() * 0.55 + 0.35,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: -(Math.random() * 0.5 + 0.25), // Continuous upward movement
      pulse: Math.random() * 0.015,
      pulseDirection: 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tracking interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY; // Moving upward

        // Wrap around edges seamlessly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10; // Reset to bottom when floating off top
        if (p.y > height + 10) p.y = -10;

        // Subtle opacity pulsing animation
        p.alpha += p.pulse * p.pulseDirection;
        if (p.alpha > 0.85 || p.alpha < 0.3) p.pulseDirection *= -1;

        // Interactive mouse repulsion
        if (interactive) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const force = (140 - dist) / 140;
            p.x -= (dx / dist) * force * 0.7;
            p.y -= (dy / dist) * force * 0.7;
          }
        }

        // Draw gold particle with rich luminous shadow glow
        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = p.size * 7;
        ctx.shadowColor = '#D4A338';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-90"
    />
  );
}
