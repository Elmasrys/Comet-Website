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
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1497366811353-6870744d04b2)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1
          }}
        />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to Comet: The Future of Real Estate Technology
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transforming property management with innovative digital solutions.
            </p>
            <Link href="#demo">
              <Button size="lg" className="text-lg">
                Get Started
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section id="about" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Revolutionizing Real Estate Management
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Comet is leading the digital transformation of property management. Our ecosystem of solutions empowers real estate professionals, sports facilities, and commercial spaces with cutting-edge technology for seamless operations and enhanced user experiences.
            </p>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <Building2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Residential</h3>
              <p className="text-gray-600 mb-4">
                Community app for modern residential property management.
              </p>
              <Link href="/residential">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sports</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive club management and member engagement platform.
              </p>
              <Link href="/sports">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Commercial</h3>
              <p className="text-gray-600 mb-4">
                Smart solutions for coworking spaces and commercial properties.
              </p>
              <Link href="/commercial">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Comet?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardContent className="pt-6">
              <CheckCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Seamless Integration</h3>
              <p className="text-sm text-gray-600">
                Easily integrate with your existing systems and workflows.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Scale className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Scalability</h3>
              <p className="text-sm text-gray-600">
                Grow with confidence using our scalable solutions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Innovation-Driven</h3>
              <p className="text-sm text-gray-600">
                Stay ahead with cutting-edge technology and features.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <UserCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">User-Centric Design</h3>
              <p className="text-sm text-gray-600">
                Intuitive interfaces designed for the best user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
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
                      <Textarea placeholder="How can we help?" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
}