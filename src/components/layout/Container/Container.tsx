import { cn } from "@/lib/utils";
import type { ContainerProps } from "./Container.types";

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-300 px-4", className)}>
      {children}
    </div>
  );
}

