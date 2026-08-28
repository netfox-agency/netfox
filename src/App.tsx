import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import MentionsLegales from "./pages/MentionsLegales";
import PubliciteGoogle from "./pages/PubliciteGoogle";
import VerticalPage from "./pages/VerticalPage";
import NotFound from "./pages/NotFound";
import { VERTICALS } from "./content/verticals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/publicite-google" element={<PubliciteGoogle />} />
          {/* Pages verticales par métier : /site-internet-couvreur, etc. */}
          {VERTICALS.map((v) => (
            <Route key={v.slug} path={`/${v.slug}`} element={<VerticalPage slug={v.slug} />} />
          ))}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
