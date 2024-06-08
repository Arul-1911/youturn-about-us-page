import React, { useEffect, useRef } from "react";

const AppreciationModalAnimation = () => {
  const canvasRef = useRef(null);
  const W = window.innerWidth;
  const H = window.innerHeight;
  const maxConfettis = 150;
  let animationFrameId = useRef(null);
  let particles = useRef([]);

  const random = (min, max) => Math.random() * (max - min) + min;

  const createParticle = () => {
    return {
      x: random(0, W),
      y: random(-H, 0),
      size: random(10, 30),
      angle: random(0, 2 * Math.PI),
      speed: random(2, 4),
      rotation: random(0, 2 * Math.PI),
      color: `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,
    };
  };

  const drawParticle = (particle, ctx) => {
    ctx.save();
    ctx.translate(particle.x, particle.y);
    ctx.rotate(particle.rotation);
    ctx.fillStyle = particle.color;
    ctx.fillRect(
      -particle.size / 2,
      -particle.size / 2,
      particle.size,
      particle.size
    );
    ctx.restore();
  };

  const updateParticle = (particle) => {
    particle.y += Math.cos(particle.angle) * particle.speed;
    particle.x += Math.sin(particle.angle) * particle.speed;
    particle.rotation += 0.1;
    if (particle.y > H) {
      resetParticle(particle);
    }
  };

  const resetParticle = (particle) => {
    particle.x = random(0, W);
    particle.y = random(-H, 0);
    particle.size = random(10, 30);
    particle.angle = random(0, 2 * Math.PI);
    particle.speed = random(2, 4);
    particle.rotation = random(0, 2 * Math.PI);
    particle.color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(
      0,
      255
    )})`;
  };

  const animate = (ctx) => {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < maxConfettis; i++) {
      drawParticle(particles.current[i], ctx);
      updateParticle(particles.current[i]);
    }
    animationFrameId.current = requestAnimationFrame(() => animate(ctx));
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = W;
    canvasRef.current.height = H;
    particles.current = [];
    for (let i = 0; i < maxConfettis; i++) {
      particles.current.push(createParticle());
    }

    animate(ctx);
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default AppreciationModalAnimation;
