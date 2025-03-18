import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Building2, Users, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: Building2,
    title: "Residential",
    description: "Complete community management solution for residential properties",
    link: "/residential"
  },
  {
    icon: Trophy,
    title: "Sports",
    description: "Comprehensive club management and member engagement platform",
    link: "/sports"
  },
  {
    icon: Users,
    title: "Commercial",
    description: "Smart solutions for coworking spaces and business communities",
    link: "/commercial"
  }
];

export default function Solutions() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Our Solutions</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tailored solutions for every property type
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <solution.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{solution.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link href={solution.link}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
