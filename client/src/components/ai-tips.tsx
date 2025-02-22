import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import { getNextTip } from "@/lib/tensorflow";

export default function AiTips() {
  const [tip, setTip] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const generateTip = async () => {
    setLoading(true);
    try {
      const newTip = await getNextTip();
      setTip(newTip);
    } catch (error) {
      console.error("Failed to generate tip:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    generateTip();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5" />
          AI Marketing Tip
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{tip || "Loading..."}</p>
        <Button
          variant="outline"
          onClick={generateTip}
          disabled={loading}
          className="w-full"
        >
          {loading ? "Generating..." : "Get New Tip"}
        </Button>
      </CardContent>
    </Card>
  );
}
