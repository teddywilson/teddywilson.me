import { useEffect } from 'react';

export default function Lightbox({ src, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center cursor-zoom-out"
      onClick={onClose}>
      <img src={src} alt="" className="max-w-full max-h-full object-contain" />
    </div>
  );
}
