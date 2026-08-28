import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
const Admin = lazy(() => import("./pages/Admin"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const PubliciteGoogle = lazy(() => import("./pages/PubliciteGoogle"));
const VerticalPage = lazy(() => import("./pages/VerticalPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
import { VERTICALS } from "./content/verticals";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
