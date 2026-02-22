import { ventures } from "./projectData";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-[1200px] w-full bg-[var(--color-line)]">
      {ventures.map((v, i) => (
        <ProjectCard key={v.id} venture={v} index={i} />
      ))}
    </div>
  );
}
