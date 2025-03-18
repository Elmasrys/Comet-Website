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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-8">
                Engage your{' '}
                <span className="text-gradient-accent">community,</span>{' '}
                <br />
                right inside your{' '}
                <span className="text-[hsl(var(--brand-navy))]">platform</span>
              </h1>

              <p className="text-xl text-[hsl(var(--brand-navy)_/_70%)] mb-12 max-w-xl">
                Easily integrate our pre-built features and launch your curated property management platform. Boost engagement and retention while collecting valuable insights.
              </p>

              <div className="flex flex-wrap gap-4">
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
            </motion.div>

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-[hsl(var(--brand-navy)_/_5%)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--brand-navy)_/_2%)] to-[hsl(var(--brand-navy)_/_8%)]" />

              {/* Interactive Elements Mockup */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-4 shadow-lg"
                >
                  <h3 className="text-[hsl(var(--brand-navy))] font-semibold mb-2">Community Updates</h3>
                  <p className="text-[hsl(var(--brand-navy)_/_70%)] text-sm">New event announcement: Summer Community Gathering</p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-8 w-8 rounded-full bg-[hsl(var(--brand-navy)_/_10%)]" />
                    <div className="flex-1">
                      <h4 className="text-[hsl(var(--brand-navy))] font-medium">Resident Portal</h4>
                      <p className="text-[hsl(var(--brand-navy)_/_60%)] text-sm">Online now</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 rounded bg-[hsl(var(--brand-navy)_/_10%)]" />
                    <div className="h-2 w-1/2 rounded bg-[hsl(var(--brand-navy)_/_10%)]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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