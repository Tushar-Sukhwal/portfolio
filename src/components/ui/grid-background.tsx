import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  gridClassName?: string;
  style?: React.CSSProperties;
}

export function GridBackground({
  children,
  className,
  gridClassName,
  style,
}: GridBackgroundProps) {
  return (
    <div
      className={cn("relative overflow-hidden w-full", className)}
      style={style}
    >
      <div
        className={cn(
          "absolute inset-0 bg-grid-small-white/[0.2] -z-10",
          gridClassName
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#0f1729]/30">
        <div className="absolute inset-0 bg-[#0f1729]/40 backdrop-blur-sm" />
      </div>
      {children}
    </div>
  );
}

export function DotBackground({
  children,
  className,
  gridClassName,
  style,
}: GridBackgroundProps) {
  return (
    <div
      className={cn("relative overflow-hidden w-full", className)}
      style={style}
    >
      <div
        className={cn(
          "absolute inset-0 bg-dot-white/[0.2] -z-10",
          gridClassName
        )}
      />
      <div className="absolute inset-0 flex items-center justify-center -z-10 bg-[#0f1729]/30">
        <div className="absolute inset-0 bg-[#0f1729]/40 backdrop-blur-sm" />
      </div>
      {children}
    </div>
  );
}
