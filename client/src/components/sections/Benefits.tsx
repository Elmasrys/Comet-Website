import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle, Scale, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Puzzle,
    title: "Seamless Integration",
    description: "Easily integrate with your existing systems and workflows"
  },
  {
    icon: Scale,
    title: "Scalability",
    description: "Solutions that grow with your business needs"
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "Cutting-edge technology for modern property management"
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces designed for real users"
  }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Choose Comet?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <benefit.icon className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
