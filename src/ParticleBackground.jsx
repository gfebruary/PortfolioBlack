import React, { useRef, useEffect } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];
    const maxParticles = 100;
    const particleSize = 3;
    const lifespan = 3000;
    const particleSpawnInterval = 100; // Adjust this to control spawn frequency
    let lastTime = 0;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createParticle = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const direction = Math.random() * 2 * Math.PI;
      const speed = 0.1 + Math.random() * 0.3; // Slower speed
      const life = lifespan;
      const alpha = 0; // Initial alpha value
      return { x, y, direction, speed, life, alpha };
    };

    const updateParticles = (time) => {
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.life -= deltaTime;
        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;

        particle.alpha = 1 - particle.life / lifespan; // Update alpha gradually

        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`;
        ctx.fillRect(particle.x, particle.y, particleSize, particleSize);
      });

      if (
        particles.length < maxParticles &&
        Math.random() < deltaTime / particleSpawnInterval
      ) {
        particles.push(createParticle());
      }

      requestAnimationFrame(updateParticles);
    };

    const startAnimation = () => {
      updateParticles(0);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);

    // ------------------------------------5second delay
    const startDelay = 5000;
    const timerId = setTimeout(startAnimation, startDelay);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default ParticleBackground;
