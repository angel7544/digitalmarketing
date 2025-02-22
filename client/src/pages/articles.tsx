import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "The Future of SEO in 2025",
    category: "SEO",
    summary: "Explore emerging SEO trends including AI-driven content optimization, voice search optimization, and mobile-first indexing strategies.",
    readTime: "8 min read",
    content: `
      SEO continues to evolve with technological advancements. Key trends include:

      1. AI-Driven Content Optimization
      - Machine learning algorithms for content relevance
      - Automated content quality assessment
      - Predictive keyword analysis

      2. Voice Search Optimization
      - Natural language processing improvements
      - Conversational keyword targeting
      - Featured snippet optimization

      3. Mobile-First Indexing
      - Responsive design importance
      - Mobile performance metrics
      - User experience signals

      Stay ahead by adapting your SEO strategy to these emerging trends.
    `
  },
  {
    id: 2,
    title: "Mastering Social Media Marketing",
    category: "Social Media",
    summary: "Learn effective strategies for building brand presence across different social platforms and engaging with your target audience.",
    readTime: "10 min read",
    content: `
      Building a strong social media presence requires:

      1. Platform-Specific Strategies
      - Understand each platform's unique features
      - Adapt content format and tone
      - Leverage platform-specific tools

      2. Engagement Techniques
      - Create interactive content
      - Respond to comments promptly
      - Build community through discussions

      3. Content Calendar Planning
      - Maintain consistent posting schedule
      - Plan content themes in advance
      - Track performance metrics
    `
  },
  {
    id: 3,
    title: "Email Marketing Best Practices",
    category: "Email",
    summary: "Discover how to create compelling email campaigns, improve open rates, and drive conversions through personalized content.",
    readTime: "6 min read",
    content: `Email marketing best practices include:

1. List Building
- Grow your email list organically
- Offer valuable lead magnets
- Use double opt-in for confirmation

2. Segmentation
- Segment your audience based on behaviour
- Personalize emails for better engagement
- A/B test subject lines and content

3. Automation
- Automate email sequences for onboarding
- Set up automated responses for inquiries
- Track email performance metrics`
  },
  {
    id: 4,
    title: "CRM Automation Strategies",
    category: "CRM",
    summary: "Implement automated workflows to streamline customer interactions and improve engagement throughout the customer journey.",
    readTime: "12 min read",
    content: `CRM automation strategies include:

1. Workflow Automation
- Automate repetitive tasks like data entry
- Use automation to improve efficiency
- Streamline customer interaction processes

2. Lead Scoring and Qualification
- Score leads based on their engagement
- Qualify leads to focus on the best prospects
- Improve conversion rates through prioritization

3. Reporting and Analytics
- Track key metrics like customer lifetime value
- Identify trends and areas for improvement
- Make data-driven decisions to optimize processes`
  },
  {
    id: 5,
    title: "Content Marketing Success Guide",
    category: "Content",
    summary: "Create engaging content that resonates with your audience and drives organic traffic to your website.",
    readTime: "15 min read",
    content: `Content marketing success guide:

1. Audience Research
- Understand your target audience's needs
- Identify their pain points and interests
- Create content that addresses their needs

2. Content Strategy
- Develop a content calendar for planning
- Focus on creating valuable and engaging content
- Promote content through various channels

3. Content Promotion
- Use social media and email marketing
- Engage with your audience in comments
- Track content performance metrics`
  },
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);

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

      {selectedArticle ? (
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="outline" 
            onClick={() => setSelectedArticle(null)}
            className="mb-4"
          >
            ← Back to Articles
          </Button>
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-2xl">{selectedArticle.title}</CardTitle>
                <span className="text-sm text-muted-foreground">
                  {selectedArticle.readTime}
                </span>
              </div>
              <span className="text-sm text-primary">{selectedArticle.category}</span>
            </CardHeader>
            <CardContent>
              <div className="prose prose-slate max-w-none">
                {selectedArticle.content.split('\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Card key={article.id}>
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
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setSelectedArticle(article)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}