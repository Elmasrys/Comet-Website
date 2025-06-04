import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { PageTransition } from "./components/layout/PageTransition";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Residential from "./pages/residential";
import Sports from "./pages/sports";
import Commercial from "./pages/commercial";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <Switch location={location} key={location}>
            <Route 
              path="/" 
              component={() => (
                <PageTransition>
                  <Home />
                </PageTransition>
              )} 
            />
            <Route 
              path="/about" 
              component={() => (
                <PageTransition>
                  <About />
                </PageTransition>
              )} 
            />
            <Route 
              path="/partners" 
              component={() => (
                <PageTransition>
                  <Partners />
                </PageTransition>
              )} 
            />
            <Route 
              path="/residential" 
              component={() => (
                <PageTransition>
                  <Residential />
                </PageTransition>
              )} 
            />
            <Route 
              path="/sports" 
              component={() => (
                <PageTransition>
                  <Sports />
                </PageTransition>
              )} 
            />
            <Route 
              path="/commercial" 
              component={() => (
                <PageTransition>
                  <Commercial />
                </PageTransition>
              )} 
            />
            <Route 
              path="/privacy-policy" 
              component={() => (
                <PageTransition>
                  <PrivacyPolicy />
                </PageTransition>
              )} 
            />
            <Route 
              component={() => (
                <PageTransition>
                  <NotFound />
                </PageTransition>
              )} 
            />
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;