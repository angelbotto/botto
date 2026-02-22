import { useIntersectionReveal } from "@/hooks/useIntersectionReveal";
import { cn } from "@/lib/cn";
import { ConnectCTA } from "./ConnectCTA";
import { SocialLinks } from "./SocialLinks";

export function Connect() {
  const { ref: ctaRef, isVisible: ctaVisible } = useIntersectionReveal<HTMLDivElement>();
  const { ref: socRef, isVisible: socVisible } = useIntersectionReveal<HTMLDivElement>();

  return (
    <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center py-[100px] px-5 md:px-10 text-center">
      <div
        ref={ctaRef}
        className={cn(
          "opacity-0 translate-y-[35px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]",
          ctaVisible && "opacity-100 translate-y-0",
        )}
      >
        <ConnectCTA />
      </div>
      <div
        ref={socRef}
        className={cn(
          "opacity-0 translate-y-[35px] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300",
          socVisible && "opacity-100 translate-y-0",
        )}
      >
        <SocialLinks />
      </div>
    </section>
  );
}
