import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import OverMij from "./pages/OverMij";
import SpiritueleKindercoach from "./pages/SpiritueleKindercoach";
import Kindertolk from "./pages/Kindertolk";
import Weerbaarheid from "./pages/Weerbaarheid";
import Contact from "./pages/Contact";
import Tarieven from "./pages/Tarieven";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/over-mij" element={<OverMij />} />
          <Route path="/spiritueel-kindercoach" element={<SpiritueleKindercoach />} />
          <Route path="/kindertolk" element={<Kindertolk />} />
          <Route path="/weerbaarheid" element={<Weerbaarheid />} />
          <Route path="/tarieven" element={<Tarieven />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
