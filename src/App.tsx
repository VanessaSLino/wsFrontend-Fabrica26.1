import imagemFundo from "./assets/bg-rickmorty1.webp";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import Favoritos from "@/pages/Favoritos";
import DetalhesPersonagem from "./pages/DetalhesPersonagem";
import NotFound from "./pages/NotFound";

const clienteQuery = new QueryClient();

const App = () => (
  <QueryClientProvider client={clienteQuery}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
       <div className="min-h-screen bg-background" style={{ backgroundImage: `url(${imagemFundo})`, backgroundSize: "cover", backgroundAttachment: "fixed", backgroundPosition: "center" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/detalhes/:id" element={<DetalhesPersonagem />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;