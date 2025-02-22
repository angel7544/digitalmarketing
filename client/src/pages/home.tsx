import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import AiTips from "@/components/ai-tips";

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Master Digital Marketing with AI
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Learn modern marketing strategies, SEO techniques, and CRM best practices
          with our AI-powered platform.
        </p>
        <Link href="/learning">
          <Button size="lg">Start Learning</Button>
        </Link>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <img
          src="https://images.unsplash.com/photo-1556691421-cf15fe27a0b6"
          alt="Digital Marketing Strategy"
          className="rounded-lg object-cover aspect-video"
        />
        <img
          src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24"
          alt="Social Media Marketing"
          className="rounded-lg object-cover aspect-video"
        />
        <img
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93"
          alt="SEO Optimization"
          className="rounded-lg object-cover aspect-video"
        />
      </div>

      <div className="max-w-lg mx-auto">
        <AiTips />
      </div>
    </div>
  );
}
