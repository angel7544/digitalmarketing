import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Alex Thompson",
    role: "AI & Marketing Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Expert in AI-driven marketing strategies with 8+ years of experience.",
  },
  {
    name: "Sarah Chen",
    role: "SEO Expert",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Passionate about optimizing digital presence and improving search rankings.",
  },
  {
    name: "Michael Rodriguez",
    role: "CRM Strategist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    bio: "Specialized in developing customer relationship strategies and automation.",
  },
];

export default function AboutUs() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-4">About Us</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          We're a team of digital marketing experts dedicated to helping businesses
          succeed in the digital age through AI-powered insights and strategies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.name}>
            <CardContent className="pt-6">
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
