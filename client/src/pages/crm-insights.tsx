import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AiTips from "@/components/ai-tips";

export default function CrmInsights() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">CRM Insights</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn how to effectively manage customer relationships and automate
          marketing processes.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Segmentation</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ Demographic segmentation</li>
              <li>✓ Behavioral analysis</li>
              <li>✓ Purchase history tracking</li>
              <li>✓ Customer lifetime value</li>
              <li>✓ Engagement scoring</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Automation Strategies</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>✓ Email marketing automation</li>
              <li>✓ Lead nurturing workflows</li>
              <li>✓ Customer feedback loops</li>
              <li>✓ Social media integration</li>
              <li>✓ Analytics and reporting</li>
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
