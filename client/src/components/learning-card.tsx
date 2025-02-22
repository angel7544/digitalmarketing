import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Module } from "@shared/schema";

interface LearningCardProps {
  module: Module;
  onStart: () => void;
}

export default function LearningCard({ module, onStart }: LearningCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">{module.title}</CardTitle>
          <Badge variant="secondary">{module.category.toUpperCase()}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-6">{module.description}</p>
        <Button onClick={onStart} className="w-full">
          Start Learning
        </Button>
      </CardContent>
    </Card>
  );
}
