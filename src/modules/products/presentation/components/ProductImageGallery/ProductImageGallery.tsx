"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import type { ProductImageGalleryProps } from "./ProductImageGallery.types";

export function ProductImageGallery({
  images,
  thumbnail,
  title,
}: ProductImageGalleryProps) {
  const galleryImages = useMemo(() => {
    if (images.length > 0) {
      return images;
    }

    return [thumbnail];
  }, [images, thumbnail]);

  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);

  return (
    <div className="space-y-4">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-gray-200 bg-white">
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-contain p-6"
          priority
        />
      </div>

      <div className="flex gap-3 overflow-x-auto pb-1">
        {galleryImages.map((image, index) => {
          const isActive = image === selectedImage;

          return (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={cn(
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl border bg-white transition-all",
                isActive
                  ? "border-azul-bidcom ring-2 ring-blue-100"
                  : "border-gray-200 hover:border-gray-300",
              )}>
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
    </div>
  );
}
