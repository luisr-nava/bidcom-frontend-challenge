import { cn } from "@/lib/utils";
import type { InputProps } from "./Input.types";

export function Input({ className, error, ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={cn(
          "h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-900 outline-none transition-colors",
          "placeholder:text-gray-400",
          "focus:border-azul-bidcom focus:ring-2 focus:ring-blue-100",
          error && "border-danger focus:border-danger",
          className,
        )}
        {...props}
      />

      {error && <p className="mt-1 text-xs text-danger">{error}</p>}
    </div>
  );
}

