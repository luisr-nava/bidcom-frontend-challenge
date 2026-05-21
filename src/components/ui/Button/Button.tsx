import { cn } from "@/lib/utils";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-azul-bidcom text-white hover:bg-hover-clickable",
        variant === "secondary" &&
          "border border-azul-bidcom bg-white text-azul-bidcom hover:bg-blue-50",
        variant === "ghost" &&
          "bg-transparent text-azul-bidcom hover:bg-blue-50",
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-10 px-4 text-sm",
        size === "lg" && "h-12 px-6 text-base",
        className,
      )}
      {...props}>
      {children}
    </button>
  );
};

