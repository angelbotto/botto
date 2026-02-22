import { cn } from "@/lib/cn";

interface LoadingScreenProps {
  visible: boolean;
}

export function LoadingScreen({ visible }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-[var(--color-bg)] z-[9999] flex items-center justify-center flex-col gap-[22px] transition-[opacity,visibility] duration-800",
        !visible && "opacity-0 invisible pointer-events-none",
      )}
    >
      <div className="text-[8px] tracking-[5px] text-[var(--color-accent-glow)] uppercase">
        Initializing
      </div>
      <div className="w-[180px] h-px bg-[var(--color-line)] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)] animate-[loader-fill_1.5s_ease_forwards]"
          style={{ width: 0 }}
        />
      </div>
    </div>
  );
}
