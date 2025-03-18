import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-background pt-16 pb-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Welcome to Comet: The Future of Real Estate Technology
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            Transform your property management with cutting-edge technology solutions designed for the modern real estate industry.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <a href="#contact">Get Started</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
