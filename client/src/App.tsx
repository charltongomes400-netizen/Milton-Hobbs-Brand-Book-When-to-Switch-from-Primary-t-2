import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ArticlePage from "@/pages/ArticlePage";
import ImmigrationPage from "@/pages/ImmigrationPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/insights/:slug" component={ArticlePage} />
      <Route path="/expertise/immigration" component={ImmigrationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
