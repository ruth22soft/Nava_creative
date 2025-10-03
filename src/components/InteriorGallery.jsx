import { useState, useEffect, useCallback } from "react";

const images = Array.from({ length: 18 }, (_, i) => `/src/assets/Interior/interior_${i + 1}.jpg`);

const InteriorGallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    setOpen(false);
    document.body.style.overflow = '';
  };

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, next, prev]);

  // basic touch support
  useEffect(() => {
    if (!open) return;
    let startX = 0;
    const onTouchStart = (e) => (startX = e.touches[0].clientX);
    const onTouchEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (dx > 50) prev();
      if (dx < -50) next();
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [open, next, prev]);

  return (
    <section id="projects-interior" className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-white mb-6">Interior Projects</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button key={src} onClick={() => openAt(i)} className="overflow-hidden rounded-md">
              <img src={src} alt={`interior-${i + 1}`} className="w-full h-40 object-cover transform hover:scale-105 transition duration-300" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button onClick={close} aria-label="Close" className="absolute top-6 right-6 text-white text-3xl z-60">✕</button>
          <button onClick={prev} aria-label="Previous" className="absolute left-6 text-white text-3xl z-60">‹</button>
          <img src={images[index]} alt={`full-${index + 1}`} className="max-h-full max-w-full object-contain" />
          <button onClick={next} aria-label="Next" className="absolute right-6 text-white text-3xl z-60">›</button>
        </div>
      )}
    </section>
  );
};

export default InteriorGallery;
