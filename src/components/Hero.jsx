import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// placeholder images from assets
import hero from "../assets/hero_image/hero1.jpg";
import hero2 from "../assets/hero_image/hero3.jpg";
import hero3 from "../assets/hero_image/hero2.jpg";
import hero4 from "../assets/hero_image/hero4.jpg";

const slides = [hero, hero2, hero3, hero4];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Full-bleed slider image */}
      <motion.img
        key={slides[index]}
        src={slides[index]}
        alt={`slide-${index}`}
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay controls (prev / next) */}
      <div className="absolute inset-0 flex justify-between items-center px-4 sm:px-8">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="bg-black/40 hover:bg-black/60 text-white p-3 rounded-full backdrop-blur-sm"
        >
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
