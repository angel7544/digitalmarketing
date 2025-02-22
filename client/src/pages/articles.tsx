import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const articles = [
  {
    title: "The Future of SEO in 2025",
    category: "SEO",
    summary: "Explore emerging SEO trends including AI-driven content optimization, voice search optimization, and mobile-first indexing strategies.",
    readTime: "8 min read",
  },
  {
    title: "Mastering Social Media Marketing",
    category: "Social Media",
    summary: "Learn effective strategies for building brand presence across different social platforms and engaging with your target audience.",
    readTime: "10 min read",
  },
  {
    title: "Email Marketing Best Practices",
    category: "Email",
    summary: "Discover how to create compelling email campaigns, improve open rates, and drive conversions through personalized content.",
    readTime: "6 min read",
  },
  {
    title: "CRM Automation Strategies",
    category: "CRM",
    summary: "Implement automated workflows to streamline customer interactions and improve engagement throughout the customer journey.",
    readTime: "12 min read",
  },
  {
    title: "Content Marketing Success Guide",
    category: "Content",
    summary: "Create engaging content that resonates with your audience and drives organic traffic to your website.",
    readTime: "15 min read",
  },
];

export default function Articles() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">
          Digital Marketing Articles
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of in-depth articles on digital marketing
          strategies, tips, and best practices.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article) => (
          <Card key={article.title}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl">{article.title}</CardTitle>
                <span className="text-sm text-muted-foreground">
                  {article.readTime}
                </span>
              </div>
              <span className="text-sm text-primary">{article.category}</span>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{article.summary}</p>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
