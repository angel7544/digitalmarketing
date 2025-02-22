import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  text: string;
  isBot: boolean;
}

const defaultResponses: Record<string, string> = {
  default: "I'll help you find information about digital marketing. Try asking about SEO, CRM, or social media marketing!",
  seo: "SEO (Search Engine Optimization) helps improve your website's visibility in search results. Key aspects include keyword research, quality content, and technical optimization.",
  crm: "CRM (Customer Relationship Management) helps businesses manage and analyze customer interactions throughout the customer lifecycle.",
  social: "Social media marketing involves creating and sharing content on social media platforms to achieve marketing and branding goals.",
  email: "Email marketing is a powerful digital marketing channel for nurturing leads and maintaining customer relationships through personalized communications.",
};

function getResponse(question: string): string {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes("seo")) return defaultResponses.seo;
  if (lowerQuestion.includes("crm")) return defaultResponses.crm;
  if (lowerQuestion.includes("social")) return defaultResponses.social;
  if (lowerQuestion.includes("email")) return defaultResponses.email;
  return defaultResponses.default;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! How can I help you learn about digital marketing?", isBot: true },
  ]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isBot: false };
    const botResponse = { text: getResponse(input), isBot: true };

    setMessages([...messages, userMessage, botResponse]);
    setInput("");
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageCircle />
      </Button>

      <Card
        className={cn(
          "fixed bottom-20 right-4 w-80 transition-all duration-200 transform",
          isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center p-3 border-b">
          <h3 className="font-semibold">Digital Marketing Assistant</h3>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-3">
          <div className="h-80 overflow-y-auto mb-3 space-y-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "p-2 rounded-lg max-w-[80%]",
                  msg.isBot
                    ? "bg-muted ml-0"
                    : "bg-primary text-primary-foreground ml-auto"
                )}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
