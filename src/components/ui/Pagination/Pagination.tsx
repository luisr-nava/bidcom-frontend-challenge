import Link from "next/link";

import { cn } from "@/lib/utils";
import type { PaginationProps } from "./Pagination.types";

export function Pagination({
  currentPage,
  totalPages,
  basePath = "/",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  const getPageHref = (page: number) =>
    page === 1 ? basePath : `${basePath}?page=${page}`;

  return (
    <nav
      className="flex items-center justify-center gap-2"
      aria-label="Paginación">
      <Link
        href={getPageHref(previousPage)}
        aria-disabled={currentPage === 1}
        className={cn(
          "rounded-md border border-gray-300 px-3 py-2 text-sm font-medium transition-colors",
          currentPage === 1
            ? "pointer-events-none opacity-50"
            : "hover:bg-gray-100",
        )}>
        Anterior
      </Link>

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        const shouldRender =
          page === 1 ||
          page === totalPages ||
          Math.abs(page - currentPage) <= 1;

        if (!shouldRender) {
          if (page === 2 || page === totalPages - 1) {
            return (
              <span key={page} className="px-2 text-sm text-gray-400">
                ...
              </span>
            );
          }

          return null;
        }
        return (
          <Link
            key={page}
            href={getPageHref(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={cn(
              "rounded-md border px-3 py-2 text-sm font-medium transition-colors",
              currentPage === page
                ? "border-azul-bidcom bg-azul-bidcom text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-100",
            )}>
            {page}
          </Link>
        );
      })}

      <Link
        href={getPageHref(nextPage)}
        aria-disabled={currentPage === totalPages}
        className={cn(
          "rounded-md border border-gray-300 px-3 py-2 text-sm font-medium transition-colors",
          currentPage === totalPages
            ? "pointer-events-none opacity-50"
            : "hover:bg-gray-100",
        )}>
        Siguiente
      </Link>
    </nav>
  );
}

