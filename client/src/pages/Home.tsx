import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Building, ArrowRight, Shield, Gauge, Sparkles, UserCircle, BellRing, CreditCard, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Home() {
  const [rotatingText, setRotatingText] = useState(0);
  const rotatingWords = ["Community", "Sports", "Coworking"];
  const [selectedTile, setSelectedTile] = useState<'residential' | 'sports' | 'commercial' | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedTile(id as 'residential' | 'sports' | 'commercial');
  };

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

  const features = {
    residential: {
      title: "Community Mobile App",
      description: "Our Community Mobile App fosters a stronger, more connected living environment by providing a centralized platform where members can stay informed, engage with neighbors, and participate in community activities.",
      features: [
        "Real-time announcements to keep residents updated",
        "Event management tools to organize and promote community gatherings",
        "Seamless communication channels for effortless interaction",
        "Resource access to simplify daily living"
      ]
    },
    sports: {
      title: "Sports Club Management System",
      description: "Our Sports Club Management System is designed to revolutionize the way clubs operate, offering a comprehensive digital solution to enhance member experiences and streamline operations.",
      features: [
        "Membership Management & Renewal",
        "Profile Management with complete member data",
        "Academies & Training program management",
        "Progress tracking for athlete development"
      ]
    },
    commercial: {
      title: "Smart Community & Coworking Management System",
      description: "Designed to enhance the functionality and efficiency of coworking spaces and smart community buildings, our Commercial solution integrates powerful management tools with a seamless membership system.",
      features: [
        "Space & Resource Booking system",
        "Automated Billing & Invoicing",
        "Access Control & Security management",
        "Community Engagement Tools"
      ]
    }
  };

  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
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
                <span className="text-[hsl(var(--brand-navy))]">
                  Switch to the Future:
                  <br />
                  The All-in-one
                </span>
                <br />
                <div className="h-[1.1em] relative">
                  <motion.span
                    key={rotatingWords[rotatingText]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-gradient-accent absolute left-0"
                  >
                    {rotatingWords[rotatingText]}
                  </motion.span>
                </div>
                <span className="text-[hsl(var(--brand-navy))]">App</span>
              </h1>

              <p className="text-xl text-[hsl(var(--brand-navy)_/_70%)] mb-12 max-w-xl">
                Designed to build stronger, more connected communities, our apps provide a central hub for seamless communication, real-time updates, and effortless communities management—all in a user-friendly experience.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#solutions"> {/* Updated link */}
                  <Button
                    size="lg"
                    className="bg-[hsl(var(--brand-navy))] hover:bg-[hsl(var(--brand-navy)_/_90%)] text-white px-8 h-14"
                  >
                    Get a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right Column - Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden bg-[hsl(var(--brand-navy)_/_5%)]"
            >
              <div className="absolute inset-0 flex items-center justify-center text-[hsl(var(--brand-navy)_/_20%)]">
                Platform Preview Image
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="container mx-auto px-4 py-16">
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
            Explore our comprehensive suite of property management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Building2,
              title: "Residential",
              description: "Our Community Mobile App fosters stronger, more connected living environments with real-time announcements, event management, and seamless communication."
            },
            {
              icon: Users,
              title: "Sports",
              description: "Revolutionize club operations with comprehensive membership management, training programs, and performance tracking solutions."
            },
            {
              icon: Building,
              title: "Commercial",
              description: "Transform your space with automated billing, access control integration, and powerful community engagement tools."
            }
          ].map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card
                className={`h-full hover:shadow-lg transition-all cursor-pointer ${
                  selectedTile === solution.title.toLowerCase()
                    ? 'bg-[hsl(var(--brand-gold)_/_10%)] ring-2 ring-[hsl(var(--brand-gold))]'
                    : 'hover:bg-[hsl(var(--brand-navy)_/_5%)]'
                }`}
                onClick={() => scrollToSection(solution.title.toLowerCase())}
              >
                <CardContent className="p-6">
                  <solution.icon
                    className={`h-12 w-12 mb-4 transition-colors ${
                      selectedTile === solution.title.toLowerCase()
                        ? 'text-[hsl(var(--brand-gold))]'
                        : 'text-[hsl(var(--brand-navy))]'
                    }`}
                  />
                  <h3 className={`text-xl font-semibold mb-2 transition-colors ${
                    selectedTile === solution.title.toLowerCase()
                      ? 'text-[hsl(var(--brand-gold))]'
                      : 'text-[hsl(var(--brand-navy))]'
                  }`}>
                    {solution.title}
                  </h3>
                  <p className="text-[hsl(var(--brand-navy)_/_80%)]">{solution.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </section>

      {/* Product Features Sections */}
      {/* Residential Features */}
      <section id="residential" className="container mx-auto px-4 py-24 bg-[hsl(var(--brand-navy)_/_2%)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Residential Solutions
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              Empower your residential community with our comprehensive management platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BellRing,
                title: "Real-time Announcements",
                description: "Keep residents informed with instant community updates and notifications"
              },
              {
                icon: Calendar,
                title: "Event Management",
                description: "Organize and promote community gatherings with built-in RSVP tracking"
              },
              {
                icon: Users,
                title: "Community Directory",
                description: "Foster connections with a secure resident directory and messaging"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">
                      {feature.title}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Features */}
      <section id="sports" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Sports Club Management
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              Streamline your sports club operations with powerful management tools
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UserCircle,
                title: "Member Profiles",
                description: "Track progress, attendance, and achievements for each member"
              },
              {
                icon: Shield,
                title: "Training Programs",
                description: "Manage multiple training programs with detailed progress tracking"
              },
              {
                icon: CreditCard,
                title: "Payment Processing",
                description: "Handle membership fees and program payments securely"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">
                      {feature.title}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Features */}
      <section id="commercial" className="container mx-auto px-4 py-24 bg-[hsl(var(--brand-navy)_/_2%)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Commercial Space Management
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              Transform your commercial space with smart management solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Space Booking",
                description: "Efficient workspace and resource reservation system"
              },
              {
                icon: Gauge,
                title: "Access Control",
                description: "Secure entry management and visitor tracking"
              },
              {
                icon: Sparkles,
                title: "Community Tools",
                description: "Foster collaboration with integrated community features"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <feature.icon className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">
                      {feature.title}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
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