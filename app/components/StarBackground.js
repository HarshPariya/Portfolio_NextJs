"use client";

import { useState, useEffect } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [parallaxX, setParallaxX] = useState(0);
  const [parallaxY, setParallaxY] = useState(0);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => generateStars();
    const handleMouseMove = (e) => {
      setParallaxX((e.clientX / window.innerWidth - 0.5) * 10);
      setParallaxY((e.clientY / window.innerHeight - 0.5) * 10);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const generateStars = () => {
    const count = Math.floor((window.innerWidth * window.innerHeight) / 8000);
    setStars(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.3,
        speed: Math.random() * 2 + 1,
      }))
    );
  };

  const generateMeteors = () => {
    const newMeteors = Array.from({ length: 4 }, (_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 10,
      animationDuration: Math.random() * 3 + 3,
    }));
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            position: "absolute",
            borderRadius: "9999px",
            backgroundColor: "white",
            boxShadow: "0 0 15px 3px rgba(255,255,255,0.5)",
            animation: `twinkle ${star.speed}s ease-in-out infinite`,
            transform: `translate(${parallaxX * (star.speed / 2)}px, ${
              parallaxY * (star.speed / 2)
            }px)`,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          style={{
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: `${meteor.delay}s`,
            animationDuration: `${meteor.animationDuration}s`,
            position: "absolute",
            borderRadius: "9999px",
            background: "linear-gradient(to right, white, transparent)",
            boxShadow: "0 0 20px 5px rgba(255, 255, 255, 0.3)",
            transform: "rotate(-45deg)",
            animationName: "meteor",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes meteor {
          0% { transform: translate(0, 0) rotate(-45deg); opacity: 1; }
          100% { transform: translate(300px, 300px) rotate(-45deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default StarBackground;
