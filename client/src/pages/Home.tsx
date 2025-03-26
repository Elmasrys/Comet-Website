import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building2, Users, Building, ArrowRight, Shield, Gauge, Sparkles, UserCircle, BellRing, CreditCard, Calendar, Paintbrush, Heart, Blocks, Brain, CircuitBoard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { SiSalesforce, SiAmazon, SiApplepay, SiGooglepay } from "react-icons/si";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const countryToCodes: { [key: string]: string } = {
  "United States": "+1",
  "United Kingdom": "+44",
  "United Arab Emirates": "+971",
  "Egypt": "+20",
  "Saudi Arabia": "+966",
  "India": "+91",
  // Add more countries as needed
};

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina",
  "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic",
  "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
  "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
  "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia",
  "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
  "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
  "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
  "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
  "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam",
  "Yemen", "Zambia", "Zimbabwe"
];

export default function Home() {
  const [rotatingText, setRotatingText] = useState(0);
  const rotatingWords = ["Community", "Sports", "Coworking"];
  const [selectedTile, setSelectedTile] = useState<'residential' | 'sports' | 'commercial' | null>(null);
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

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
      company: "",
      businessType: "",
      country: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    const businessType = form.watch("businessType");

    const messages = {
      residential: "Welcome to Comet! Let's transform your residential property management experience.",
      sports: "Ready to revolutionize your sports facility management? We're here to help.",
      commercial: "Looking to enhance your commercial space? Discover our smart management solutions.",
      other: "Welcome to Comet! How can we help transform your property management?",
    };

    setWelcomeMessage(messages[businessType as keyof typeof messages] || "");
  }, [form.watch("businessType")]);

  const handleCountryChange = (country: string) => {
    form.setValue("country", country);
    const dialCode = countryToCodes[country] || "";
    setSelectedCountryCode(dialCode);
    // Clear the phone field when country changes
    form.setValue("phone", "");
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-digit characters from the input
    const numericValue = event.target.value.replace(/\D/g, '');
    form.setValue("phone", numericValue);
  };

  async function onSubmit(data: InsertContactSubmission) {
    try {
      // Format the phone number with the country code
      const formattedData = {
        ...data,
        phone: selectedCountryCode + data.phone
      };

      await apiRequest("POST", "/api/contact", formattedData);
      toast({
        title: "Success",
        description: "Thank you for your message. We'll be in touch soon!",
      });
      form.reset();
      setSelectedCountryCode("");
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
                <Link href="#solutions">
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

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Why Choose Comet
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              Experience the next generation of property management solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "White Labeled",
                description: "Fully customizable branding options to match your company's identity and style.",
                icon: Paintbrush,
              },
              {
                title: "Intuitive Customer Experience",
                description: "User-friendly interface designed for seamless navigation and engagement.",
                icon: Heart,
              },
              {
                title: "Completely Modular",
                description: "Flexible and customizable modules to match your specific business needs.",
                icon: Blocks,
              },
              {
                title: "AI Integration",
                description: "First platform to integrate conversational AI for enhanced user interaction.",
                icon: Brain,
              },
              {
                title: "Built for Mixed Use",
                description: "Comprehensive solution designed for diverse property development needs.",
                icon: Building2,
              },
              {
                title: "End-to-End Solution",
                description: "Complete management system covering all aspects of property operations.",
                icon: CircuitBoard,
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <benefit.icon className="h-12 w-12 text-[hsl(var(--brand-gold))] mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--brand-navy))]">
                      {benefit.title}
                    </h3>
                    <p className="text-[hsl(var(--brand-navy)_/_70%)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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

      {/* Technology Integrations Section */}
      <section className="container mx-auto px-4 py-24 bg-[hsl(var(--brand-navy)_/_2%)]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-navy))]">
              Technology Integrations
            </h2>
            <p className="text-lg text-[hsl(var(--brand-navy)_/_70%)] max-w-2xl mx-auto">
              Seamlessly connected with leading technology and payment solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {[
              {
                icon: SiSalesforce,
                name: "Salesforce",
                category: "CRM",
                color: "#00A1E0"
              },
              {
                Component: () => (
                  <div className="text-2xl font-semibold text-[#002050]">MS Dynamics</div>
                ),
                name: "Microsoft Dynamics",
                category: "Business Solutions"
              },
              {
                Component: () => (
                  <div className="text-2xl font-semibold text-[#4B53BC]">MS 365</div>
                ),
                name: "Microsoft 365",
                category: "Productivity"
              },
              {
                icon: SiAmazon,
                name: "AWS",
                category: "Cloud Infrastructure",
                color: "#FF9900"
              },
              {
                Component: () => (
                  <div className="text-2xl font-semibold bg-gradient-to-r from-[#00B5E2] to-[#002E6D] bg-clip-text text-transparent">PayTabs</div>
                ),
                name: "PayTabs",
                category: "Payment Gateway"
              },
              {
                Component: () => (
                  <div className="text-2xl font-semibold text-[#1D4289]">Valu</div>
                ),
                name: "Valu",
                category: "Financial Services"
              },
              {
                icon: SiApplepay,
                name: "Apple Pay",
                category: "Digital Payments",
                color: "#000000"
              },
              {
                icon: SiGooglepay,
                name: "Google Pay",
                category: "Digital Payments",
                color: "#4285F4"
              },
              {
                Component: () => (
                  <div className="text-2xl font-semibold text-[#2B5A3B]">Maisonette</div>
                ),
                name: "Maisonette",
                category: "Property Management"
              }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-none shadow-none hover:bg-white/50 transition-colors">
                  <CardContent className="p-8 flex flex-col items-center justify-center text-center space-y-4">
                    {tech.icon ? (
                      <tech.icon className={`h-16 w-16`} style={{ color: tech.color }} />
                    ) : tech.Component ? (
                      <tech.Component />
                    ) : null}
                    <div>
                      <h3 className="text-lg font-semibold text-[hsl(var(--brand-navy))]">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-[hsl(var(--brand-navy)_/_50%)] mt-1">
                        {tech.category}
                      </p>
                    </div>
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
            <p className="text-lg text-[hsl(var(--brand-navy)_/_80%)] mb-4">
              Ready to transform your property management? Let's talk.
            </p>
            {welcomeMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-lg font-medium text-[hsl(var(--brand-gold))]"
              >
                {welcomeMessage}
              </motion.p>
            )}
          </div>
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
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
                          <FormLabel>Work Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your company" {...field} />
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
                          <FormLabel>Industry</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="residential">Residential Property Management</SelectItem>
                              <SelectItem value="sports">Sports & Recreation</SelectItem>
                              <SelectItem value="commercial">Commercial & Coworking</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <Select
                            onValueChange={handleCountryChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem                                  key={country} value={country}>
                                  {country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <div className="relative">
                              {selectedCountryCode && (
                                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[hsl(var(--brand-navy)_/_70%)]">
                                  {selectedCountryCode}
                                </span>
                              )}
                              <Input
                                placeholder="Phone number"
                                {...field}
                                onChange={handlePhoneChange}
                                className={selectedCountryCode ? "pl-16" : ""}
                                type="tel"
                                pattern="[0-9]*"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

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