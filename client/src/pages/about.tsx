import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // Using react-icons for the icons

const teamMembers = [
  {
    name: "Angel",
    role: "SEO & AI Specialist",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFinZ5z30I1nQ/profile-displayphoto-shrink_400_400/B4DZTRVNVDGkAk-/0/1738678785903?e=1746057600&v=beta&t=ISzcQ9W37Srd_JGoYGJkc5fkNlljPHQ-FmLl7JmK0Yk",
    bio: "Expert in AI-driven marketing strategies with 3+ years of experience.",
    linkedin: "https://www.linkedin.com/in/angel3002",
    github: "https://github.com/angel7544",
  },
  {
    name: "Ashutosh Kumar",
    role: "Full Stack Developer",
    image: "https://devashu.tech/static/media/Ashutosh.206017ddeed8a1d05736.jpg",
    bio: "Passionate about optimizing digital presence and improving search rankings.",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-7ba1a6211/",
    github: "https://github.com/Ashukr321/",
  },
  {
    name: "Himanshu Kumar",
    role: "CRM Strategist & SEO Expert",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHUJDszeLlG0w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1723631826386?e=1746057600&v=beta&t=7owSrgKW0UJ7sDeunUFju3V2BZSq2ounbuiygwlGFi4",
    bio: "Specialized in developing customer relationship strategies and automation.",
    linkedin: "https://www.linkedin.com/in/himanshu-kumar-b6b96b248/",
    github: "https://github.com/",
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
                <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
