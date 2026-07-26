import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw, Maximize2, Image as ImageIcon } from 'lucide-react';
import { ProjectImage } from '../data/portfolioData';
import { formatImageUrl } from '../lib/utils';

interface ProjectGalleryProps {
  gallery: ProjectImage[];
  projectTitle: string;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ gallery, projectTitle }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    setZoomLevel(1);
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    setZoomLevel(1);
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? gallery.length - 1 : (prev as number) - 1));
    setZoomLevel(1);
  }, [selectedIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === gallery.length - 1 ? 0 : (prev as number) + 1));
    setZoomLevel(1);
  }, [selectedIndex, gallery.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="space-y-3">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
        <ImageIcon className="w-3.5 h-3.5 text-sky-500" />
        <span>Project Image Gallery (Click to Expand)</span>
      </p>

      {/* Thumbnails Row */}
      <div className="grid grid-cols-5 gap-2 sm:gap-3">
        {gallery.map((img, idx) => (
          <button
            key={img.id || idx}
            onClick={() => handleOpen(idx)}
            id={`gallery-thumb-${idx}`}
            className="group relative rounded-xl overflow-hidden aspect-video bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-sky-400 dark:hover:border-sky-400 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
            title={img.title || `View Screenshot ${idx + 1}`}
          >
            <img
              src={formatImageUrl(img.url)}
              alt={img.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Maximize2 className="w-4 h-4 text-white" />
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="fullscreen-gallery-modal"
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Modal Header */}
            <div
              className="flex items-center justify-between z-10 max-w-7xl mx-auto w-full text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <h4 className="text-lg font-bold font-outfit text-white">
                  {projectTitle}
                </h4>
                <p className="text-xs text-sky-400 font-semibold">
                  {gallery[selectedIndex].title} ({selectedIndex + 1} of {gallery.length})
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="p-2 rounded-lg bg-red-600/80 hover:bg-red-600 text-white cursor-pointer ml-2"
                  title="Close Modal (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Main Image Stage */}
            <div
              className="relative flex-1 flex items-center justify-center overflow-hidden my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white cursor-pointer border border-slate-700 backdrop-blur-md"
                title="Previous Image (Left Arrow)"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Display Image */}
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-w-5xl max-h-[75vh] flex items-center justify-center p-2"
              >
                <img
                  src={formatImageUrl(gallery[selectedIndex].url)}
                  alt={gallery[selectedIndex].title}
                  className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-slate-800"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white cursor-pointer border border-slate-700 backdrop-blur-md"
                title="Next Image (Right Arrow)"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Caption Footer */}
            <div
              className="text-center max-w-2xl mx-auto text-slate-300 text-xs sm:text-sm bg-slate-900/80 px-4 py-2.5 rounded-xl border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <p>{gallery[selectedIndex].caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
