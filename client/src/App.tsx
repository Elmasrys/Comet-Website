import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import Home from "./pages/Home";
import Residential from "./pages/residential";
import Sports from "./pages/sports";
import Commercial from "./pages/commercial";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/residential" component={Residential} />
          <Route path="/sports" component={Sports} />
          <Route path="/commercial" component={Commercial} />
          <Route component={NotFound} />
        </Switch>
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
