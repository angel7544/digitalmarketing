import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navigation from "@/components/navigation";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Learning from "@/pages/learning";
import SeoToolkit from "@/pages/seo-toolkit";
import CrmInsights from "@/pages/crm-insights";
import AboutUs from "@/pages/about";
import Contact from "@/pages/contact";
import Articles from "@/pages/articles";
import ChatBot from "@/components/chat-bot";

function Router() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/learning" component={Learning} />
          <Route path="/seo-toolkit" component={SeoToolkit} />
          <Route path="/crm-insights" component={CrmInsights} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <ChatBot />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;