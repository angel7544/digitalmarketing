import { useQuery } from "@tanstack/react-query";
import LearningCard from "@/components/learning-card";
import { type Module } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function Learning() {
  const { data: modules, isLoading } = useQuery<Module[]>({
    queryKey: ["/api/modules"],
  });

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-[200px]" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Learning Modules
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our comprehensive learning modules to master digital marketing
          skills.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {modules?.map((module) => (
          <LearningCard
            key={module.id}
            module={module}
            onStart={() => console.log("Starting module:", module.id)}
          />
        ))}
      </div>
    </div>
  );
}
