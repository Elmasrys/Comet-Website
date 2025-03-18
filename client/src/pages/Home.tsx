import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
import { Building2, Users, Building, ArrowRight, CheckCircle, Zap, Scale, UserCircle, CreditCard, Calendar, BarChart, BellRing } from "lucide-react";

export default function Home() {
  const [rotatingText, setRotatingText] = useState(0);
  const rotatingWords = ["Community", "Sports", "Coworking"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingText((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
                Switch to the Future:
                <br />
                The All-in-one
                <br />
                <div className="h-[1.1em] relative">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={rotatingWords[rotatingText]}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-gradient-accent absolute left-0"
                    >
                      {rotatingWords[rotatingText]}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="text-[hsl(var(--brand-navy))]">App</span>
              </h1>

              <p className="text-xl text-[hsl(var(--brand-navy)_/_70%)] mb-12 max-w-xl">
                Comet Innovations gives you the tools to engage your community.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#demo">
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

            {/* Right Column - Feature Icons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative grid grid-cols-2 gap-8"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[hsl(var(--brand-navy)_/_5%)] rounded-full blur-3xl" />

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <CreditCard className="h-8 w-8 text-[hsl(var(--brand-navy))]" />
                  <h3 className="mt-4 font-semibold">CRM</h3>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-[hsl(var(--brand-navy))]" />
                  <h3 className="mt-4 font-semibold">Members</h3>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <Calendar className="h-8 w-8 text-[hsl(var(--brand-navy))]" />
                  <h3 className="mt-4 font-semibold">Events</h3>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <BarChart className="h-8 w-8 text-[hsl(var(--brand-navy))]" />
                  <h3 className="mt-4 font-semibold">Analytics</h3>
                </CardContent>
              </Card>
            </motion.div>
          </div>
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
            Explore our comprehensive suite of property management solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <solution.icon className="h-12 w-12 text-[hsl(var(--brand-navy))] mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">{solution.title}</h3>
                  <p className="text-[hsl(var(--brand-navy)_/_80%)] mb-6">{solution.description}</p>
                  <Link href={`/${solution.title.toLowerCase()}`}>
                    <Button variant="ghost" className="w-full hover:bg-[hsl(var(--brand-navy))] hover:text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]"
          >
            Membership Management Made Simple
          </motion.h2>
          <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
            Increase your retention rate and skyrocket your member acquisition by automating your processes, expanding your reach and establishing a culture of engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Customizable Renewal Flows", icon: ArrowRight },
                { label: "Automatic Reminders", icon: BellRing },
                { label: "Membership Directory", icon: Users },
                { label: "Recurring Payments", icon: CreditCard }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-navy)_/_5%)] text-sm font-medium text-[hsl(var(--brand-navy))]"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              ))}
            </div>

            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)]">
              Streamline your membership operations with our comprehensive suite of tools designed for modern property management.
            </p>

            <Button
              size="lg"
              className="bg-[hsl(var(--brand-navy))] hover:bg-[hsl(var(--brand-navy)_/_90%)] text-white"
            >
              Learn about Membership Software
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden bg-[hsl(var(--brand-navy)_/_5%)] p-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Renewal Health Check</h3>
                  <div className="text-4xl font-bold text-[hsl(var(--brand-navy))]">89%</div>
                  <p className="text-sm text-[hsl(var(--brand-navy)_/_60%)]">RENEWAL RATE</p>
                  <div className="text-sm mt-2">95 Renewed, 11 Expired</div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Applications Awaiting Payment</h3>
                  <div className="text-4xl font-bold text-[hsl(var(--brand-navy))]">$24k</div>
                  <p className="text-sm text-[hsl(var(--brand-navy)_/_60%)]">TOTAL VALUE</p>
                  <div className="text-sm mt-2">32 Applications Pending</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Event Management Section */}
      <section className="container mx-auto px-4 pb-24">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]"
          >
            Event Management
          </motion.h2>
          <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
            Create, promote and manage your events end-to-end with just a few clicks. In-person or online, the choice is yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-4">
              {[
                { label: "Branded Event Invitations", icon: Calendar },
                { label: "Automated Notifications", icon: BellRing },
                { label: "Social Media Integration", icon: Users },
                { label: "List Segmentation", icon: BarChart },
                { label: "Drag & Drop Email Editor", icon: CreditCard }
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--brand-navy)_/_5%)] text-sm font-medium text-[hsl(var(--brand-navy))]"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              ))}
            </div>

            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)]">
              Create, promote and manage your events end-to-end with just a few clicks. In-person or online, the choice is yours.
            </p>

            <Button
              size="lg"
              className="bg-[hsl(var(--brand-navy))] hover:bg-[hsl(var(--brand-navy)_/_90%)] text-white"
            >
              Learn about Events Management
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-xl overflow-hidden bg-[hsl(var(--brand-navy)_/_5%)] p-8"
          >
            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Total Recipients</h3>
                  <div className="text-4xl font-bold text-[hsl(var(--brand-navy))]">12.1k</div>
                  <p className="text-sm text-[hsl(var(--brand-navy)_/_60%)]">RECIPIENTS</p>
                  <div className="text-sm mt-2">Event invitations sent</div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Event Attendance</h3>
                  <div className="text-4xl font-bold text-[hsl(var(--brand-navy))]">7.5k</div>
                  <p className="text-sm text-[hsl(var(--brand-navy)_/_60%)]">ATTENDEES</p>
                  <div className="text-sm mt-2">Confirmed attendees</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              description: "Our ecosystem connects every solution for a unified experience."
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
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <feature.icon className="h-8 w-8 text-[hsl(var(--brand-navy))] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold mb-2 text-[hsl(var(--brand-navy))]">{feature.title}</h3>
                  <p className="text-sm text-[hsl(var(--brand-navy)_/_80%)]">{feature.description}</p>
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