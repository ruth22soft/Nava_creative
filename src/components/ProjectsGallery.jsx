import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const ProjectsGallery = ({ images = [], title }) => {
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

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (!open) return;
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, next, prev]);

  // simple touch handlers
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
    <section className="pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl text-white mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button key={src} onClick={() => openAt(i)} className="block w-full h-48 overflow-hidden rounded-md focus:outline-none">
              <img src={src} alt={`img-${i}`} className="w-full h-full object-cover transform hover:scale-105 transition" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button onClick={close} aria-label="Close" className="absolute top-6 right-6 text-white text-3xl">✕</button>
          <button onClick={prev} aria-label="Previous" className="absolute left-6 text-white text-3xl">‹</button>
          <div className="max-w-5xl max-h-[90vh] w-full px-8">
            <img src={images[index]} alt={`full-${index}`} className="w-full h-full object-contain mx-auto" />
          </div>
          <button onClick={next} aria-label="Next" className="absolute right-6 text-white text-3xl">›</button>
        </div>
      )}
    </section>
  );
};

ProjectsGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default ProjectsGallery;
