import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { interiorImages, architectureImages, brandingImages } from '../constants/images';

const ProjectsGallery = ({ category = 'interior', title }) => {
  const images =
    category === 'interior'
      ? interiorImages
      : category === 'architecture'
      ? architectureImages
      : brandingImages;

  const heading =
    title ||
    (category === 'interior'
      ? 'Interior Design'
      : category === 'architecture'
      ? 'Architectural Design'
      : 'Branding');

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
        <h2 className="text-2xl md:text-3xl font-bold text-nava-brown mb-6 text-center">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <button
              key={`${category}-${i}`}
              onClick={() => openAt(i)}
              className="block w-full overflow-hidden rounded-md ring-1 ring-black/5 focus:outline-none"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={src}
                  alt={`${category}-${i + 1}`}
                  className="w-full h-full object-cover transform hover:scale-105 transition"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <button onClick={close} aria-label="Close" className="absolute top-4 right-4 text-white text-4xl md:text-5xl">✕</button>
          <button onClick={prev} aria-label="Previous" className="absolute left-4 text-white text-4xl md:text-5xl">‹</button>
          <div className="w-full max-w-5xl max-h-[85vh] md:max-h-[90vh] px-4 md:px-8">
            <img
              src={images[index]}
              alt={`full-${index + 1}`}
              className="w-full h-full object-contain mx-auto select-none"
              draggable="false"
            />
          </div>
          <button onClick={next} aria-label="Next" className="absolute right-4 text-white text-4xl md:text-5xl">›</button>
        </div>
      )}
    </section>
  );
};

ProjectsGallery.propTypes = {
  category: PropTypes.oneOf(["interior", "architecture", "branding"]),
  title: PropTypes.string,
};

export default ProjectsGallery;
