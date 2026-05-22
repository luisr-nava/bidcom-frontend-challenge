"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { ProductImageGalleryProps } from "./ProductImageGallery.types";

export function ProductImageGallery({
  images,
  thumbnail,
  title,
}: ProductImageGalleryProps) {
  const galleryImages = useMemo(() => {
    const uniqueImages = Array.from(new Set([thumbnail, ...images]));

    return uniqueImages.length > 0 ? uniqueImages : [thumbnail];
  }, [images, thumbnail]);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = galleryImages[selectedIndex];

  const handlePrevious = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1,
    );
  };

  const handleNext = () => {
    setSelectedIndex((currentIndex) =>
      currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <div className="grid gap-4 md:grid-cols-[88px_1fr]">
      <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:max-h-130 md:flex-col md:overflow-y-auto md:overflow-x-hidden">
        {galleryImages.map((image, index) => {
          const isActive = index === selectedIndex;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedIndex(index)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={cn(
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-md border bg-white transition-all",
                isActive
                  ? "border-azul-bidcom ring-2 ring-blue-100"
                  : "border-gray-200 hover:border-gray-300",
              )}
              aria-label={`Ver imagen ${index + 1} de ${title}`}>
              <Image
                src={image}
                alt={`${title} ${index + 1}`}
                fill
                className="object-contain p-2"
              />
            </button>
          );
        })}
      </div>

      <div className="order-1 relative aspect-square overflow-hidden rounded-md bg-white md:order-2">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-contain p-6"
          priority
        />

        {galleryImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrevious}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-grey-666 shadow-sm transition-colors hover:text-azul-bidcom"
              aria-label="Imagen anterior">
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-grey-666 shadow-sm transition-colors hover:text-azul-bidcom"
              aria-label="Imagen siguiente">
              <ChevronRight size={24} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
