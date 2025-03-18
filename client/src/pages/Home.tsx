import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Building2, Users, Building, ArrowRight, CheckCircle, Zap, Scale, UserCircle } from "lucide-react";

export default function Home() {
  const { toast } = useToast();
  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      businessType: "",
      message: "",
    },
  });

  async function onSubmit(data: InsertContactSubmission) {
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Success",
        description: "Thank you for your message. We'll be in touch soon!",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit form. Please try again.",
      });
    }
  }

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--brand-navy)_/_2%)] to-transparent pointer-events-none" />

        {/* Content */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-[1000px] mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Pre-title */}
              <h2 className="text-[hsl(var(--brand-gold))] font-medium tracking-wide">
                PROPERTY TECHNOLOGY SOLUTIONS
              </h2>

              {/* Main Title */}
              <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] text-[hsl(var(--brand-navy))]">
                Building the future of{' '}
                <span className="text-gradient-accent">real estate</span>{' '}
                management
              </h1>

              {/* Description */}
              <p className="text-xl text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl">
                An interconnected ecosystem where every solution seamlessly integrates, empowering businesses to scale effortlessly.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#demo">
                  <Button 
                    size="lg" 
                    className="bg-[hsl(var(--brand-navy))] hover:bg-[hsl(var(--brand-navy)_/_90%)] text-white px-8 h-14"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#about">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[hsl(var(--brand-navy)_/_20%)] text-[hsl(var(--brand-navy))] hover:bg-[hsl(var(--brand-navy)_/_5%)] px-8 h-14"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>

              {/* Stats or Trust Indicators */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-[hsl(var(--brand-navy)_/_10%)]">
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--brand-navy))]">Unified Platform</div>
                  <p className="text-[hsl(var(--brand-navy)_/_60%)]">Seamlessly integrated solutions for modern property management</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--brand-navy))]">Smart Automation</div>
                  <p className="text-[hsl(var(--brand-navy)_/_60%)]">Streamline operations with intelligent workflows</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--brand-navy))]">Scale with Ease</div>
                  <p className="text-[hsl(var(--brand-navy)_/_60%)]">Growth-ready infrastructure for any size operation</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="about" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]"
          >
            Our Mission
          </motion.h2>
          <p className="text-lg text-[hsl(var(--brand-navy)_/_80%)] max-w-3xl mx-auto">
            To build the most seamless, integrated real estate technology ecosystem that enhances efficiency, fosters community, and drives innovation across residential, sports, and commercial sectors.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]"
          >
            Solutions for Every Need
          </motion.h2>
          <p className="text-lg text-[hsl(var(--brand-navy)_/_80%)] max-w-2xl mx-auto">
            Explore our comprehensive suite of property management solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building2 className="h-12 w-12 text-[hsl(var(--brand-navy))] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">Residential</h3>
                <p className="text-[hsl(var(--brand-navy)_/_80%)] mb-6">
                  Our Community Mobile App fosters stronger, more connected living environments with real-time announcements, event management, and seamless communication.
                </p>
                <Link href="/residential">
                  <Button variant="ghost" className="w-full group-hover:bg-[hsl(var(--brand-navy))] group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-[hsl(var(--brand-navy))] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">Sports</h3>
                <p className="text-[hsl(var(--brand-navy)_/_80%)] mb-6">
                  Revolutionize club operations with comprehensive membership management, training programs, and performance tracking solutions.
                </p>
                <Link href="/sports">
                  <Button variant="ghost" className="w-full group-hover:bg-[hsl(var(--brand-navy))] group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="relative overflow-hidden group hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Building className="h-12 w-12 text-[hsl(var(--brand-navy))] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">Commercial</h3>
                <p className="text-[hsl(var(--brand-navy)_/_80%)] mb-6">
                  Transform your space with automated billing, access control integration, and powerful community engagement tools.
                </p>
                <Link href="/commercial">
                  <Button variant="ghost" className="w-full group-hover:bg-[hsl(var(--brand-navy))] group-hover:text-white transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]"
          >
            Why Choose Comet?
          </motion.h2>
          <p className="text-lg text-[hsl(var(--brand-navy)_/_80%)] max-w-2xl mx-auto">
            Experience the advantages of our cutting-edge platform
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: CheckCircle,
              title: "Seamless Integration",
              description: "Our ecosystem connects every solution for a unified experience, integrating seamlessly with your existing systems."
            },
            {
              icon: Scale,
              title: "Scalability",
              description: "Solutions designed to grow with your business, from small communities to large enterprises."
            },
            {
              icon: Zap,
              title: "Innovation-Driven",
              description: "We stay ahead of the curve, delivering technology that pushes real estate forward."
            },
            {
              icon: UserCircle,
              title: "User-Centric Design",
              description: "Built with simplicity and functionality in mind, ensuring an intuitive user experience."
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <benefit.icon className="h-8 w-8 text-[hsl(var(--brand-navy))] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-[hsl(var(--brand-navy))]">{benefit.title}</h3>
                  <p className="text-sm text-[hsl(var(--brand-navy)_/_80%)]">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-4 pb-32">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]"
            >
              Get in Touch
            </motion.h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_80%)]">
              Ready to transform your property management? Let's talk.
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g. Residential, Commercial, Sports" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-[hsl(var(--brand-navy))] text-white hover:bg-[hsl(var(--brand-navy)_/_90%)]">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}