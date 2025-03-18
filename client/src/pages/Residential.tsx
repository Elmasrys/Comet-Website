import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Community announcements and updates",
  "Event management and calendar",
  "Resident communication platform",
  "Resource booking and management",
  "Maintenance request system",
  "Digital payment solutions"
];

export default function Residential() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-6">
            Transforming Tenant Communities
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Create thriving residential communities with our comprehensive management solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa"
              alt="Modern residential property"
              className="rounded-lg shadow-lg"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="mt-8" asChild>
              <a href="/#contact">Explore Residential Solutions</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
