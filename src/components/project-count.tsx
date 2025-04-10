import { Card, CardContent } from "@/components/ui/card";

interface ProjectCountBoxProps {
  counts: { type: string; count: number }[];
}

export default function ProjectCountBox({ counts }: ProjectCountBoxProps) {
  return (
    <Card className="rounded-xl border p-6 space-y-6">
      <h2 className="text-2xl font-bold justify-center items-center text-center text-primary dark:text-primary">
        PROJECTS
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {counts.map(({ type, count }) => (
          <Card key={type} className="text-center shadow-sm">
            <CardContent className="flex flex-col items-center p-4">
              <span className="text-2xl font-bold text-primary dark:text-primary">
                {count}
              </span>
              <span className="text-muted-foreground capitalize">{type}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </Card>
  );
}
