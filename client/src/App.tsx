import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import HomeV1 from "@/pages/HomeV1";
import HomeV2 from "@/pages/HomeV2";
import HomeV3 from "@/pages/HomeV3";
import HomeV4 from "@/pages/HomeV4";
import ArticlePage from "@/pages/ArticlePage";
import ImmigrationPage from "@/pages/ImmigrationPage";
import OurFirmPage from "@/pages/OurFirmPage";
import CareersPage from "@/pages/CareersPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/home-v1" component={HomeV1} />
      <Route path="/home-v2" component={HomeV2} />
      <Route path="/home-v3" component={HomeV3} />
      <Route path="/home-v4" component={HomeV4} />
      <Route path="/firm" component={OurFirmPage} />
      <Route path="/careers" component={CareersPage} />
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
