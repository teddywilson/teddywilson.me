import { useState } from 'react';
import Lightbox from './Lightbox';

export default function GalleryImage({ painting }) {
  const { title, filename, dimensions, materials, year } = painting;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 md:mb-12" style={{ width: '100%', maxWidth: '400px' }}>
      <img
        src={`/paintings/${filename}`}
        alt={title}
        className="w-full h-auto object-contain cursor-zoom-in"
        onClick={() => setIsOpen(true)}
      />

      <div className="mt-2 text-sm text-gray-600 leading-tight">
        <p>
          <span className="font-semibold italic">{title},</span> {year}
        </p>
        <p className="text-xs">{materials}</p>
        <p className="text-xs">{dimensions}</p>
      </div>

      {isOpen && <Lightbox src={`/paintings/${filename}`} onClose={() => setIsOpen(false)} />}
    </div>
  );
}
