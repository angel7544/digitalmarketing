import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AiTips from "@/components/ai-tips";

export default function SeoToolkit() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">SEO Toolkit</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Essential tools and guidelines for optimizing your website's search engine
          visibility.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>On-Page SEO Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ Optimize meta titles and descriptions</li>
              <li>✓ Use header tags effectively</li>
              <li>✓ Optimize images with alt text</li>
              <li>✓ Create SEO-friendly URLs</li>
              <li>✓ Improve page loading speed</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Keyword Research Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ Identify long-tail keywords</li>
              <li>✓ Analyze search intent</li>
              <li>✓ Check keyword difficulty</li>
              <li>✓ Monitor keyword rankings</li>
              <li>✓ Track competitor keywords</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-lg mx-auto">
        <AiTips />
      </div>
    </div>
  );
}
