interface ProjectCountBoxProps {
  counts: { type: string; count: number }[];
}

export default function ProjectCountBox({ counts }: ProjectCountBoxProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {counts.map(({ type, count }) => (
        <div
          key={type}
          className="w-30 h-20 flex flex-col items-center justify-center rounded-xl border border-border text-center bg-muted/20 dark:bg-muted/10"
        >
          <span className="text-lg font-bold text-primary">{count}</span>
          <span className="text-xs text-muted-foreground capitalize">
            {type}
          </span>
        </div>
      ))}
    </div>
  );
}
