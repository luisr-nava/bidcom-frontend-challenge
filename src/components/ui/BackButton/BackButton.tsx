"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import type { BackButtonProps } from "./BackButton.types";

export function BackButton({
  label = "Volver",
  href,
  className,
}: BackButtonProps) {
  const router = useRouter();

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-semibold text-azul-bidcom transition-colors hover:text-hover-clickable",
          className,
        )}>
        <ArrowLeft size={18} />
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={cn(
        "inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-azul-bidcom transition-colors hover:text-hover-clickable",
        className,
      )}>
      <ArrowLeft size={18} />
      {label}
    </button>
  );
}
